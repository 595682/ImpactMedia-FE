/* eslint-disable no-underscore-dangle */
import Link from 'next/link';

import TextButton from '@/common/components/buttons/textButton';
import StrapiImage from '@/common/components/StrapiImage';
import type { BlogArticleEntity } from '@/types';

import BlogCard from '../Blog/components/BlogCard';
import Space from '../Layout/components/Space';
import Title from '../Layout/components/Title';
import Wrapper from '../Layout/components/Wrapper';
import BlogPostSubtitle from './components/BlogPostSubtitle';
import BlogPostTitle from './components/BlogPostTitle';
import Breadcrumbs from './components/Breadcrumbs';
import ContentRenderer from './components/ContentRenderer';

interface IBlogPostModule {
  data: BlogArticleEntity;
  morePosts: BlogArticleEntity[] | [];
}
const BlogPostModule = ({ data, morePosts }: IBlogPostModule) => {
  return (
    <>
      <div className="relative border-t-[1px] border-theme-primary-light pt-40">
        <div className="absolute top-0 left-0 -z-10 h-5/6 w-full bg-theme-primary"></div>
        <Wrapper width="narrow">
          <Breadcrumbs title={data?.attributes?.title || null} />
          <BlogPostTitle>{data?.attributes?.title || null}</BlogPostTitle>
          <BlogPostSubtitle>
            {data?.attributes?.subtitle || null}
          </BlogPostSubtitle>
          <p className="mt-10 text-white">
            {data.attributes?.shortDescription}
          </p>

          <div className="my-12 flex overflow-hidden rounded-xl">
            <StrapiImage
              src={data.attributes?.themeImage?.data?.attributes?.url}
              width={data.attributes?.themeImage?.data?.attributes?.width || 0}
              height={
                data.attributes?.themeImage?.data?.attributes?.height || 0
              }
              alt={
                data.attributes?.themeImage?.data?.attributes
                  ?.alternativeText || ''
              }
              blur
              blurUrl={
                data.attributes?.themeImage?.data?.attributes?.formats?.small
                  ?.url || data.attributes?.themeImage?.data?.attributes?.url
              }
            />
          </div>
        </Wrapper>
      </div>
      <div>
        <Wrapper width="narrow">
          {data.attributes?.content?.map((content, key) => (
            <ContentRenderer key={key} content={content} />
          ))}
        </Wrapper>
      </div>
      <Space amount="xl" />
      {morePosts.length > 0 && (
        <>
          <div className="bg-theme-primary py-20">
            <Wrapper>
              <Title size="xl3">
                <span className="text-white">More articles</span>
              </Title>
              <div className="mx-auto mt-12 grid max-w-lg gap-10 lg:max-w-none lg:grid-cols-3">
                {morePosts.map((post) => (
                  <BlogCard post={post} key={post.id} />
                ))}
              </div>

              <div className="mt-10 flex w-full justify-end">
                <Link href="/blog" passHref scroll={false}>
                  <a>
                    <TextButton title="MORE POSTS" color="secondary" />
                  </a>
                </Link>
              </div>
            </Wrapper>
          </div>
          <Space amount="xl" />
        </>
      )}
    </>
  );
};
export default BlogPostModule;
