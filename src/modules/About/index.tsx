import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { quoteRootAnimation } from '@/common/animations/quoteAnimation';
import {
  defaultWrapperAnimation,
  SlideBgUpAnimation,
  StaggerItemAnimation,
  StaggerWrapperAnimation,
  TitleAnimation,
} from '@/common/animations/sharedAnimations';
import Title from '@/Layout/Title';
import Wrapper from '@/Layout/Wrapper';

import AboutCard from './components/AboutCard';
import Quote from './components/Quote';

const AboutModule = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      className=" relative border-t-[1px] border-theme-primary-light  pt-28 text-theme-primary"
      ref={ref}
      initial="hidden"
      variants={defaultWrapperAnimation}
      animate={controls}
    >
      <div className="absolute top-0 -z-30 h-full w-full bg-theme-primary"></div>
      <Wrapper>
        <div className="grid lg:grid-cols-2">
          <div className="h-max overflow-hidden">
            <motion.div variants={TitleAnimation}>
              <Title>
                <span className="text-white">Our</span>{' '}
                <span className="font-bold text-white">Company</span>
              </Title>
            </motion.div>
          </div>
          <motion.div variants={quoteRootAnimation}>
            <Quote
              content="We are, as a species, addicted to story. Even when the body goes to sleep, the mind 
              stays up all night, telling itself stories."
              author="Jonathan Gottschall"
            />
          </motion.div>
        </div>
      </Wrapper>
      <div className="relative">
        <motion.div
          variants={SlideBgUpAnimation}
          className="absolute bottom-0 -z-10 h-4/6 w-full bg-white sm:h-1/2"
        ></motion.div>
        <Wrapper>
          <div className="z-10 py-3">
            <motion.div
              variants={StaggerWrapperAnimation}
              className="mt-20 grid gap-10 sm:grid-cols-2 lg:px-20"
            >
              <motion.div variants={StaggerItemAnimation}>
                <AboutCard
                  title="WHO WE ARE"
                  content="Impact Media was borne out of a desire to tell stories in a way that inspires people, puts a smile 
                  on their faces, and moves them to take action."
                />
              </motion.div>
              <motion.div variants={StaggerItemAnimation}>
                <AboutCard
                  title="WHAT WE DO"
                  content="Whether you’re looking for a one-off project like a conference, or a longer-term project like an 
                  awareness campaign, we’ve got you covered."
                />
              </motion.div>
            </motion.div>
          </div>
        </Wrapper>
      </div>
    </motion.div>
  );
};
export default AboutModule;
