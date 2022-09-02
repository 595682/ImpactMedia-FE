import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import {
  defaultWrapperAnimation,
  ExpandBgAnimation,
  StaggerItemAnimation,
  StaggerWrapperAnimation,
  TitleAnimation,
} from '@/common/animations/sharedAnimations';

import Title from '../Layout/components/Title';
import Wrapper from '../Layout/components/Wrapper';

const highlights = ['1', '2', '3', '4'];

const EventHighlightModule = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="relative py-10 pb-20"
      ref={ref}
      initial="hidden"
      variants={defaultWrapperAnimation}
      animate={controls}
      transition={{ when: 'beforeChildren' }}
    >
      <motion.div
        variants={ExpandBgAnimation}
        className="absolute inset-0 -z-10 bg-theme-primary"
      ></motion.div>
      <Wrapper>
        <div className="overflow-hidden">
          <motion.div variants={TitleAnimation}>
            <Title>
              <span className="text-white">HIGHLIGHTS</span>
            </Title>
          </motion.div>
        </div>
      </Wrapper>
      <Wrapper width="narrower">
        <motion.div
          variants={StaggerWrapperAnimation}
          className="mt-20 grid  gap-12 sm:grid-cols-2 lg:gap-14"
        >
          {highlights.map((highlight) => (
            <motion.div
              variants={StaggerItemAnimation}
              key={highlight}
              className="aspect-1 w-full rounded-lg bg-slate-300"
            ></motion.div>
          ))}
        </motion.div>
      </Wrapper>
    </motion.div>
  );
};
export default EventHighlightModule;
