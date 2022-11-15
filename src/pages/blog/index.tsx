import { useLazyQuery } from '@apollo/client';
import type { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';

import ClientOnly from '@/common/components/ClientOnly';
import PageSEO from '@/common/components/PageSEO';
import client from '@/lib/gql/client';
import {
  GET_HEADLINE_POSTS,
  GET_LIMITED_BLOG_POSTS,
} from '@/lib/gql/queries/blog';
import BlogModule from '@/modules/Blog';
import BlogLayout from '@/modules/Blog/components/BlogLayout';
import LayoutModule from '@/modules/Layout';
import type {
  BlogArticleEntity,
  BlogArticleEntityResponseCollection,
  Query,
} from '@/types';

interface IBlogProps {
  allPosts: BlogArticleEntityResponseCollection;
  headlinePosts: BlogArticleEntityResponseCollection;
}

const BlogPage = ({ allPosts, headlinePosts }: IBlogProps) => {
  const [loadedPosts, setLoadedPosts] = useState<BlogArticleEntity[] | []>([]);
  const [page, setPage] = useState(1);
  const [isThereMore, setIsThereMore] = useState(true);

  const setupMorePages = (data: Query) => {
    const fetchedPosts = data.blogArticles?.data || [];
    setIsThereMore(fetchedPosts.length > 0);
  };

  const [checkForMore] = useLazyQuery(GET_LIMITED_BLOG_POSTS, {
    onCompleted: (res: Query) => setupMorePages(res),
  });

  useEffect(() => {
    checkForMore({ variables: { page: 2 } });
    const possiblePosts = allPosts?.data || [];

    setLoadedPosts(possiblePosts);
    setPage(1);
  }, []);

  const addToLoaded = (data: Query) => {
    checkForMore({ variables: { page: page + 2 } });
    const fetchedPosts = data.blogArticles?.data || [];
    setLoadedPosts([...loadedPosts, ...fetchedPosts]);
    setPage(page + 1);
  };

  const [getMoreBlogPosts, { loading, error }] = useLazyQuery(
    GET_LIMITED_BLOG_POSTS,
    {
      onCompleted: (res: Query) => addToLoaded(res),
    }
  );

  const fetchMoreData = () => {
    getMoreBlogPosts({ variables: { page: page + 1 } });
  };

  return (
    <LayoutModule fullFooter>
      <PageSEO
        title="Blog | Impact Media"
        description="Impact Media provides the latest industry news, insights, and updates on our blog."
      />
      <BlogLayout>
        <ClientOnly>
          <BlogModule
            headlines={headlinePosts?.data || []}
            fetchMoreData={fetchMoreData}
            loading={loading}
            error={error}
            isThereMore={isThereMore}
            loadedPosts={loadedPosts}
          />
        </ClientOnly>
      </BlogLayout>
    </LayoutModule>
  );
};

export default BlogPage;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: GET_LIMITED_BLOG_POSTS,
    variables: {
      page: 1,
    },
  });

  const { data: headlineData } = await client.query({
    query: GET_HEADLINE_POSTS,
    variables: {
      page: 1,
    },
  });

  return {
    props: {
      allPosts: data.blogArticles,
      headlinePosts: headlineData.blogArticles,
    },
  };
};
