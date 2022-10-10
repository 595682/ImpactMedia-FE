import { elements } from 'contents/liveStream';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import {
  defaultWrapperAnimation,
  StaggerItemAnimation,
  StaggerWrapperAnimation,
  SubtitleAnimation,
  TitleAnimation,
} from '@/common/animations/sharedAnimations';

import Subtitle from '../Layout/components/Subtitle';
import Title from '../Layout/components/Title';
import Wrapper from '../Layout/components/Wrapper';
import NextEventCard from './components/NextEventCard';

const NextEventModule = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="py-20"
      ref={ref}
      initial="hidden"
      variants={defaultWrapperAnimation}
      animate={controls}
      transition={{ when: 'beforeChildren' }}
    >
      <Wrapper>
        <div className="overflow-hidden" key="col0">
          <motion.div variants={SubtitleAnimation}>
            <Subtitle>Our solutions for your next event</Subtitle>
          </motion.div>
        </div>
        <div className="overflow-hidden" key="col0">
          <motion.div variants={TitleAnimation}>
            <Title size="xl4">
              <span className="uppercase">
                Catered to your
                <span className="font-bold"> every need</span>
              </span>
            </Title>
          </motion.div>
        </div>
        <motion.div
          variants={StaggerWrapperAnimation}
          className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {elements.map((element, index) => (
            <motion.div
              variants={StaggerItemAnimation}
              key={index}
              className="flex cursor-pointer flex-col items-center justify-center rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <NextEventCard
                title={element.title}
                key={index}
                image={element.image}
              />
            </motion.div>
          ))}
        </motion.div>
      </Wrapper>
    </motion.div>
  );
};
export default NextEventModule;
