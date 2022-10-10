import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import {
  defaultWrapperAnimation,
  SlideUpAnimation,
  StaggerItemAnimation,
  StaggerWrapperAnimation,
  SubtitleAnimation,
} from '@/common/animations/sharedAnimations';
import Swiper from '@/common/components/Swiper';
import Wrapper from '@/Layout/Wrapper';
import Space from '@/modules/Layout/components/Space';
import Subtitle from '@/modules/Layout/components/Subtitle';
import Title from '@/modules/Layout/components/Title';

import ClientFeedbackCard from './ClientFeedbackCard';

interface IClientFeedback {
  people: any[];
  style?: 'light' | 'dark';
}
const ClientFeedback = ({ people = [], style = 'light' }: IClientFeedback) => {
  const colors = {
    dark: {
      text: 'text-white',
      bg: 'bg-theme-primary',
    },
    light: { text: 'text-theme-primary', bg: 'bg-white' },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      className={`relative py-20 ${colors[style].text}`}
      ref={ref}
      initial="hidden"
      variants={defaultWrapperAnimation}
      animate={controls}
    >
      <div
        className={`absolute inset-0 ${colors[style].bg} -z-30 w-full h-full`}
      ></div>
      <Wrapper>
        <div className="overflow-hidden">
          <motion.div variants={SubtitleAnimation}>
            <Title>
              <span className="font-bold">Trusted </span> by
            </Title>
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div variants={SubtitleAnimation}>
            <Subtitle>
              NGOs, political institutions, industry leaders, and communications
              managers
            </Subtitle>
          </motion.div>
        </div>
        <Space amount="sm" />
        <motion.ul
          variants={StaggerWrapperAnimation}
          role="list"
          className="mx-auto hidden max-w-6xl items-center space-y-4 sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid lg:grid-cols-3 lg:gap-12"
        >
          {people.map((person) => (
            <motion.div variants={StaggerItemAnimation} key={person.id}>
              <ClientFeedbackCard
                person={person}
                key={person.id}
                color={style === 'dark' ? 'light' : 'dark'}
              />
            </motion.div>
          ))}
        </motion.ul>
        <motion.div className="block lg:hidden" variants={SlideUpAnimation()}>
          <Swiper slidesPerView={1.2}>
            {people.map((person) => (
              <ClientFeedbackCard
                person={person}
                key={person.id}
                color={style === 'dark' ? 'light' : 'dark'}
              />
            ))}
          </Swiper>
        </motion.div>
      </Wrapper>
    </motion.div>
  );
};
export default ClientFeedback;
