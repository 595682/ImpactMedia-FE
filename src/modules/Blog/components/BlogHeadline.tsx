import { ArrowRightIcon } from '@heroicons/react/outline';
import React from 'react';

import CustomLink from '@/common/components/CustomLink';
import StrapiImage from '@/common/components/StrapiImage';
import type { UploadFile } from '@/types';
import formatDate from '@/utils/formatDate';

interface IBlogHeadline {
  title: string;
  href: string | null | undefined;
  date: string;
  image: UploadFile | null | undefined;
  description: string;
}
const BlogHeadline = ({
  title,
  description,
  image,
  date,
  href,
}: IBlogHeadline) => {
  if (!href) {
    return null;
  }

  return (
    <div className="h-full lg:py-8">
      <div className="h-full overflow-hidden rounded-xl bg-white shadow-md lg:relative lg:z-10 lg:pb-0">
        <div className="h-full lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8">
          <div className="aspect-w-10 aspect-h-6 relative sm:aspect-w-16 sm:aspect-h-7 lg:h-full">
            <StrapiImage
              src={image?.formats?.small?.url || image?.url}
              height={image?.formats?.small?.height || image?.height}
              width={image?.formats?.small?.width || image?.width}
              layout="fill"
              objectFit="cover"
              blur
              blurUrl={image?.formats?.thumbnail?.url}
            />
          </div>
          <div className="py-8 lg:col-span-2 lg:m-0 lg:py-16 lg:px-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              <p className="text-base font-medium text-theme-primary">
                {formatDate(date)}
              </p>
              <p className=" text-2xl font-bold text-theme-primary">{title}</p>
              <p className="mt-6 text-lg text-theme-primary">{description}</p>
              <div className="mt-6 flex justify-end pr-4 text-lg font-semibold">
                <CustomLink href={`/blog/${href}`}>
                  <span className="flex items-center">
                    <p>Keep reading</p>
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </span>
                </CustomLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogHeadline;
