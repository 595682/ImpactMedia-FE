import type { GetStaticPaths, GetStaticProps } from 'next';
import type { ParsedUrlQuery } from 'querystring';

import SEO from '@/common/components/SEO';
import client from '@/lib/gql/client';
import {
  GET_ALL_BLOG_POSTS,
  GET_BLOG_POST,
  GET_MORE_DIFFERENT_ARTICLES,
} from '@/lib/gql/queries/blog';
import BlogPostModule from '@/modules/BlogPost';
import LayoutModule from '@/modules/Layout';
import type {
  BlogArticleEntity,
  BlogArticleEntityResponse,
  BlogArticleEntityResponseCollection,
} from '@/types';

interface IBlogPostProps {
  data: BlogArticleEntity;
  morePosts: BlogArticleEntityResponseCollection;
  preview: boolean;
}

const BlogPage = ({ data, morePosts, preview }: IBlogPostProps) => {
  return (
    <LayoutModule previewMode={preview}>
      <SEO seoData={data.attributes?.seo || null} type="article" />
      <BlogPostModule data={data} morePosts={morePosts.data || []} />
    </LayoutModule>
  );
};

export default BlogPage;

interface Params extends ParsedUrlQuery {
  slug: string;
}

type Props = {
  data: BlogArticleEntityResponse;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: GET_ALL_BLOG_POSTS,
  });

  const slugs = data.blogArticles.data.map((response: any) => ({
    params: {
      slug: response.attributes.slug,
    },
  }));
  return {
    paths: slugs,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
  preview,
}) => {
  const slug = params!.slug!;
  const previewMode = preview ? 'PREVIEW' : 'LIVE';

  const { data } = await client.query({
    query: GET_BLOG_POST,
    variables: {
      slug,
      state: previewMode,
    },
  });

  const { data: morePosts } = await client.query({
    query: GET_MORE_DIFFERENT_ARTICLES,
    variables: {
      slug,
    },
  });

  return {
    props: {
      data: data.blogArticles.data[0],
      morePosts: morePosts.blogArticles,
      preview: !!preview,
    },
  };
};
