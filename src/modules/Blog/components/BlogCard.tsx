import { motion } from 'framer-motion';
import React from 'react';

import { blogCardAnimation } from '@/common/animations/blogCardAnimation';
import CustomLink from '@/common/components/CustomLink';
import StrapiImage from '@/common/components/StrapiImage';
import type { BlogArticleEntity } from '@/types';
import formatDate from '@/utils/formatDate';

interface IBlogCard {
  /*   post: {
    title: string;
    href: string;
    date: string;
    imageUrl: string;
    description: string;
  }; */
  post: BlogArticleEntity;
}
const BlogCard = ({ post }: IBlogCard) => {
  return (
    <CustomLink
      href={`/blog/${post.attributes?.slug}`}
      className="mt-2 flex flex-col overflow-hidden rounded-lg bg-white shadow-lg"
    >
      <motion.div whileHover="zoom">
        <div className=" shrink-0 overflow-hidden">
          <motion.div
            className="relative h-48 w-full object-cover"
            variants={blogCardAnimation}
            transition={{ duration: 1 }}
          >
            <StrapiImage
              src={
                post?.attributes?.themeImage?.data?.attributes?.formats?.small
                  ?.url || post.attributes?.themeImage?.data?.attributes?.url
              }
              height={
                post.attributes?.themeImage?.data?.attributes?.formats?.small
                  .height ||
                post.attributes?.themeImage?.data?.attributes?.height
              }
              width={
                post.attributes?.themeImage?.data?.attributes?.formats?.small
                  .width || post.attributes?.themeImage?.data?.attributes?.width
              }
              layout="fill"
              objectFit="cover"
              blur
              blurUrl={
                post?.attributes?.themeImage?.data?.attributes?.formats
                  ?.thumbnail?.url
              }
            />
          </motion.div>
        </div>
        <div className="flex flex-1 flex-col justify-between bg-white p-6 text-theme-primary">
          <div className="flex-1">
            <p className="text-sm ">
              {formatDate(
                post.attributes?.publishedAt || post.attributes?.createdAt
              )}
            </p>

            <p className="text-xl font-semibold text-gray-900">
              {post.attributes?.title}
            </p>
            <p className="mt-3 text-base text-gray-500">
              {post.attributes?.shortDescription}
            </p>
          </div>
        </div>
      </motion.div>
    </CustomLink>
  );
};
export default BlogCard;
