import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import {
  defaultWrapperAnimation,
  SlideUpAnimation,
} from '@/common/animations/sharedAnimations';
import Button from '@/common/components/buttons/button';
import CustomLink from '@/common/components/CustomLink';

import Title from '../Layout/components/Title';
import Wrapper from '../Layout/components/Wrapper';

const AboutUsInlineCoponent = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="bg-theme-primary py-20"
      ref={ref}
      initial="hidden"
      variants={defaultWrapperAnimation}
      animate={controls}
      transition={{ when: 'beforeChildren' }}
    >
      <Wrapper width="narrower">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="h-80 bg-slate-200"></div>
          <motion.div
            variants={SlideUpAnimation()}
            className="flex flex-col items-center justify-center space-y-6"
          >
            <Title size="xl3">
              <span className="font-bold text-white">ABOUT US</span>
            </Title>
            <p className="text-center text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              dolorem hic necessitatibus. Cum sint nostrum amet at impedit
              cumque, voluptatum minima eligendi beatae, nulla laborum ipsum
              enim repudiandae.
            </p>
            <CustomLink href="/about">
              <Button color="secondary" title="LEARN MORE" />
            </CustomLink>
          </motion.div>
        </div>
      </Wrapper>
    </motion.div>
  );
};
export default AboutUsInlineCoponent;
