import type { ApolloError } from '@apollo/client';
import { AnimatePresence, motion } from 'framer-motion';

import Button from '@/common/components/buttons/button';
import SwiperComponent from '@/common/components/Swiper';
import type { BlogArticleEntity } from '@/types';

import Space from '../Layout/components/Space';
import Subtitle from '../Layout/components/Subtitle';
import BlogCard from './components/BlogCard';
import BlogHeadline from './components/BlogHeadline';

interface IBlogModule {
  loadedPosts: BlogArticleEntity[] | [];
  headlines: BlogArticleEntity[] | [];
  fetchMoreData: () => void;
  loading: boolean;
  isThereMore: boolean;
  error: ApolloError | undefined;
}

const BlogModule = ({
  loadedPosts = [],
  headlines,
  fetchMoreData,
  loading,
  error,
  isThereMore,
}: IBlogModule) => {
  return (
    <div className="py-20">
      {/* <div className="mb-8 flex items-center sm:mb-20">
        <Title>
          <span className="font-bold text-white">Blog</span>
        </Title>
        <div className="hidden grow justify-end sm:flex">
          <Image
            src={logomark}
            width={300}
            height={200}
            alt="Impact media small logo"
          />
        </div>
      </div> */}

      <SwiperComponent
        version="dark"
        slidesPerView={1.2}
        controlTitle
        title={
          <Subtitle>
            <span className="text-white">{`Editor's pick`}</span>
          </Subtitle>
        }
      >
        {headlines.map((post, index) => (
          <BlogHeadline
            key={index}
            title={post.attributes?.title || ''}
            description={post.attributes?.shortDescription || ''}
            image={post.attributes?.themeImage.data?.attributes}
            date={post.attributes?.publishedAt || post.attributes?.createdAt}
            href={post.attributes?.slug}
          />
        ))}
      </SwiperComponent>
      <Space />

      <Subtitle>
        <span className="text-white">All blog articles</span>
      </Subtitle>

      <div className="mx-auto mt-12 grid gap-10 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
        <AnimatePresence>
          {loadedPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex h-full"
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="mt-10 flex w-full justify-end">
        {isThereMore && !error && (
          <Button
            disabled={!isThereMore}
            icon={
              loading ? (
                <div
                  role="status"
                  className="flex h-full items-center justify-center"
                >
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 animate-spin fill-black text-theme-secondary-dark dark:text-black"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : null
            }
            title={loading ? 'Loading more' : 'Load more'}
            color="secondary"
            onClick={fetchMoreData}
          />
        )}
      </div>
    </div>
  );
};
export default BlogModule;
