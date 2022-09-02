import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import { StaggerItemAnimation } from '@/common/animations/sharedAnimations';

interface INextEventCard {
  title: string;
  image: any;
  key: number;
}
const NextEventCard = ({ title, image, key }: INextEventCard) => {
  return (
    <motion.div
      variants={StaggerItemAnimation}
      key={key}
      className="flex cursor-pointer flex-col items-center justify-center rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl"
    >
      <div className="m-4 flex h-40 w-full items-center justify-center">
        <Image src={image} alt="title" />
      </div>
      <div className="mt-8 text-center text-sm font-semibold text-theme-primary">
        {title}
      </div>
    </motion.div>
  );
};
export default NextEventCard;
