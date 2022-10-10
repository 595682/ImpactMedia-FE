import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import {
  defaultWrapperAnimation,
  SlideUpAnimation,
  SubtitleAnimation,
  TitleAnimation,
} from '@/common/animations/sharedAnimations';
import SwiperComponent from '@/common/components/Swiper';
import Space from '@/Layout/Space';
import Subtitle from '@/Layout/Subtitle';
import Title from '@/Layout/Title';
import Wrapper from '@/Layout/Wrapper';
import type { TeamMemberEntity } from '@/types';

import OurteamPersonCard from './components/PersonCard';

interface IOurteamModule {
  people: TeamMemberEntity[] | [];
  color: 'light' | 'dark';
}

const colors = {
  light: {
    bg: 'bg-white',
    text: 'text-theme-primary',
  },
  dark: {
    bg: 'bg-theme-primary',
    text: 'text-white',
  },
};

const OurteamModule = ({ people = [], color = 'light' }: IOurteamModule) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      className={`relative py-20 text-white ${colors[color].text}`}
      ref={ref}
      initial="hidden"
      variants={defaultWrapperAnimation}
      animate={controls}
    >
      <div
        className={`absolute top-0 left-0 -z-20 h-full w-full ${colors[color].bg}`}
      ></div>
      <Wrapper>
        <div className="h-max overflow-hidden">
          <motion.div variants={SubtitleAnimation}>
            <Subtitle>
              <span className={`${colors[color].text}`}>
                The people behind the magic
              </span>
            </Subtitle>
          </motion.div>
        </div>
        <div className="h-max overflow-hidden">
          <motion.div variants={TitleAnimation}>
            <Title>
              <span className={`font-bold ${colors[color].text}`}>
                OUR TEAM
              </span>
            </Title>
          </motion.div>
        </div>
        <Space amount="lg" />
        <motion.div className="hidden md:block" variants={SlideUpAnimation()}>
          <SwiperComponent slidesPerView={3} version={color}>
            {people.map((person) => (
              <OurteamPersonCard
                person={person}
                key={person.id}
                color={color === 'light' ? 'dark' : 'light'}
              />
            ))}
          </SwiperComponent>
        </motion.div>
        <motion.div className="md:hidden" variants={SlideUpAnimation()}>
          <SwiperComponent slidesPerView={1.2} version={color}>
            {people.map((person) => (
              <OurteamPersonCard
                person={person}
                key={person.id}
                color={color === 'light' ? 'dark' : 'light'}
              />
            ))}
          </SwiperComponent>
        </motion.div>
      </Wrapper>
    </motion.div>
  );
};
export default OurteamModule;
