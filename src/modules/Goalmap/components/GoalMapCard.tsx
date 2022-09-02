import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import type { ReactNode } from 'react';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { goalMapCard1 } from '@/common/animations/goalMapAnimations';
import Parallax from '@/common/components/parallax';

interface IGoalMapCard {
  image: any;
  alt: string;
  description: ReactNode | string;
  offset: number;
}

const defaults = 'rounded-xl p-4 z-10';

const GoalMapCard = ({ description, image, alt, offset }: IGoalMapCard) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.9, triggerOnce: true });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <Parallax offset={offset}>
      <motion.div
        className={`bg-white ${defaults} md:max-w-xs max-w-none max-w-`}
        ref={ref}
        variants={goalMapCard1}
        initial="hidden"
        animate={controls}
        transition={{ when: 'beforeChildren' }}
      >
        <div className="flex h-full w-full flex-col space-y-4">
          <div className="flex h-1/2 w-full items-center justify-center py-4">
            <Image src={image} alt={alt} />
          </div>
          <p className="flex h-full items-center text-center">{description}</p>
        </div>
      </motion.div>
    </Parallax>
  );
};
export default GoalMapCard;
