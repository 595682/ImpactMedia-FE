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
              Impact Media was borne out of a desire to tell stories in a way
              that inspires people, puts a smile on their faces, and moves them
              to take action. As long as you have a desire to connect with a
              large audience in real time, with the most high-definition live
              streaming quality, we can help you.
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
