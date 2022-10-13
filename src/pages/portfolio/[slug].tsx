import type { GetStaticPaths, GetStaticProps } from 'next';
import type { ParsedUrlQuery } from 'querystring';

import SEO from '@/common/components/SEO';
import client from '@/lib/gql/client';
import {
  GET_ALL_PORTFOLIO_ELEMENTS_LIGHT,
  GET_MORE_DIFFERENT_PORTFOLIO_ELEMENTS,
  GET_PORTFOLIO_ELEMENT,
} from '@/lib/gql/queries/portfolio';
import LayoutModule from '@/modules/Layout';
import PortfolioElementModule from '@/modules/PortfolioElement';
import type {
  BlogArticleEntityResponse,
  PortfolioElementEntity,
  PortfolioElementEntityResponseCollection,
} from '@/types';

interface IBlogPostProps {
  data: PortfolioElementEntity;
  morePosts: PortfolioElementEntityResponseCollection;
  preview: boolean;
}

const BlogPage = ({ data, morePosts, preview }: IBlogPostProps) => {
  return (
    <LayoutModule previewMode={preview}>
      <SEO seoData={data.attributes?.seo || null} type="article" />
      <PortfolioElementModule data={data} morePosts={morePosts?.data || []} />
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
    query: GET_ALL_PORTFOLIO_ELEMENTS_LIGHT,
  });

  const slugs = data.portfolioElements.data.map((response: any) => ({
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
    query: GET_PORTFOLIO_ELEMENT,
    variables: {
      slug,
      state: previewMode,
    },
  });

  const { data: morePosts } = await client.query({
    query: GET_MORE_DIFFERENT_PORTFOLIO_ELEMENTS,
    variables: {
      slug,
    },
  });

  return {
    props: {
      data: data.portfolioElements.data[0],
      morePosts: morePosts.portfolioElements,
      preview: !!preview,
    },
  };
};
