import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import {
  portfolioCardAnimation,
  portfolioCardOverlayAnimation,
  portfolioCardOverlayBadgeAnimation,
  portfolioCardOverlayTextAnimation,
} from '@/common/animations/blogCardAnimation';
import StrapiImage from '@/common/components/StrapiImage';
import type { PortfolioElementEntity } from '@/types';
import displayEventType from '@/utils/displayEventType';

interface IPortfolioCard {
  portfolioElement: PortfolioElementEntity;
  forceHover?: boolean;
}
const PortfolioCard = ({
  portfolioElement,
  forceHover = false,
}: IPortfolioCard) => {
  return (
    <Link
      href={`/portfolio/${portfolioElement.attributes?.slug}`}
      passHref
      scroll={false}
    >
      <a>
        <motion.div
          whileHover="zoom"
          initial={forceHover ? 'zoom' : 'rest'}
          className="relative col-span-2 h-80 cursor-pointer overflow-hidden rounded-xl shadow-lg md:col-span-1"
          key={portfolioElement.attributes?.title}
        >
          <motion.div
            className="absolute z-10 flex h-full w-full "
            variants={portfolioCardAnimation}
            transition={{ duration: 1 }}
          >
            <StrapiImage
              src={
                portfolioElement.attributes?.thumbnailImage.data?.attributes
                  ?.formats?.medium?.url ||
                portfolioElement.attributes?.thumbnailImage.data?.attributes
                  ?.url
              }
              width={
                portfolioElement.attributes?.thumbnailImage.data?.attributes
                  ?.width
              }
              height={
                portfolioElement.attributes?.thumbnailImage.data?.attributes
                  ?.height
              }
              objectFit="cover"
            />
          </motion.div>
          {!portfolioElement.attributes?.publishedAt && (
            <div className="absolute right-5 top-5 z-50 rounded-xl bg-red-500 p-2">
              DRAFT
            </div>
          )}
          <motion.div
            variants={portfolioCardOverlayAnimation}
            /*  transition={{ duration: 1 }} */
            className="relative z-30 flex h-full w-full items-end justify-start p-5 after:absolute after:inset-0 after:-z-10 after:bg-theme-primary/50 after:mix-blend-multiply"
          >
            <div>
              <div className="overflow-hidden">
                <motion.p
                  className="w-max rounded-md bg-theme-primary p-2 px-4 text-xs font-bold uppercase text-white"
                  variants={portfolioCardOverlayBadgeAnimation}
                >
                  {displayEventType(portfolioElement.attributes?.elementType)}
                </motion.p>
              </div>
              <div className="overflow-hidden">
                <motion.p
                  className="text-left text-xl font-semibold text-white"
                  variants={portfolioCardOverlayTextAnimation}
                >
                  {portfolioElement.attributes?.title}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </a>
    </Link>
  );
};
export default PortfolioCard;
