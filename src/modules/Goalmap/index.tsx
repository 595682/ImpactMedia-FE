import 'swiper/css';
import 'swiper/css/effect-cards';

import { motion, useAnimation } from 'framer-motion';
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import {
  goalMapBgAnimation,
  goalMapWrapperAnimation,
} from '@/common/animations/goalMapAnimations';
import {
  SubtitleAnimation,
  TitleAnimation,
} from '@/common/animations/sharedAnimations';
import yearsCounter from '@/utils/yearsCounter';

import Space from '../Layout/components/Space';
import Subtitle from '../Layout/components/Subtitle';
import Title from '../Layout/components/Title';
import Wrapper from '../Layout/components/Wrapper';
import GoalMapCard from './components/GoalMapCard';

interface IGoalmapModulev2 {
  goals: {
    id: number;
    description: string | ReactNode;
    imageDescription: string;
    image: any;
  }[];
}

const GoalmapModule = ({ goals }: IGoalmapModulev2) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0, triggerOnce: true });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="relative py-20"
      ref={ref}
      initial="hidden"
      variants={goalMapWrapperAnimation}
      animate={controls}
      transition={{ when: 'beforeChildren' }}
    >
      <motion.div
        className="absolute inset-0 -z-10 h-full w-full bg-theme-primary"
        variants={goalMapBgAnimation}
      ></motion.div>
      <Wrapper>
        <div className="mb-20 flex flex-col items-center text-white">
          <div className="overflow-hidden">
            <motion.div variants={SubtitleAnimation}>
              <Title>
                <p className="text-center text-3xl font-bold sm:text-2xl md:text-3xl xl:text-4xl">
                  GET YOUR MESSAGE ACROSS IN THE MOST EFFECTIVE WAY
                </p>
              </Title>
            </motion.div>
          </div>
          <Space custom="mb-2" />
          <div className="overflow-hidden">
            <motion.div variants={TitleAnimation}>
              <Subtitle>
                <p className="text-center text-lg lg:text-xl">
                  {`Tap on the expertise of a team with ${yearsCounter} years of experience and
                  X video content produced.`}
                </p>
              </Subtitle>
            </motion.div>
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <div className="grid grid-cols-12">
          <div className="col-span-10 col-start-4 flex justify-end pt-10 md:col-span-5 md:col-start-1">
            <GoalMapCard
              image={goals[0]?.image}
              alt={goals[0]!.imageDescription}
              description={goals[0]!.description}
              offset={65}
            />
          </div>
          <div className="relative col-span-2 col-start-1 row-start-1 flex w-full items-center justify-center md:col-start-6">
            <div className="h-full w-4 bg-theme-secondary"></div>
            <div className="absolute flex h-16 w-16 items-center justify-center rounded-full bg-theme-secondary">
              <span className="text-2xl font-bold">1</span>
            </div>
          </div>
          <div className="col-span-5 hidden md:block"></div>
          <div className="col-span-5 hidden md:block"></div>
          <div className="relative col-span-2 col-start-1 flex w-full items-center justify-center md:col-start-auto">
            <div className="h-full w-4 bg-theme-secondary"></div>
            <div className="absolute flex h-16 w-16 items-center justify-center rounded-full bg-theme-secondary">
              <span className="text-2xl font-bold">2</span>
            </div>
          </div>
          <div className="col-span-10 col-start-4 pt-10 md:col-span-5 md:col-start-auto">
            <GoalMapCard
              image={goals[1]?.image}
              alt={goals[1]!.imageDescription}
              description={goals[1]!.description}
              offset={60}
            />
          </div>
          <div className="col-span-10 col-start-4 flex justify-end pt-10 md:col-span-5 md:col-start-auto">
            <GoalMapCard
              image={goals[2]?.image}
              alt={goals[2]!.imageDescription}
              description={goals[2]!.description}
              offset={65}
            />
          </div>
          <div className="relative col-span-2 col-start-1 row-start-3 flex w-full items-center justify-center md:col-start-6">
            <div className="h-full w-4 bg-theme-secondary"></div>
            <div className="absolute flex h-16 w-16 items-center justify-center rounded-full bg-theme-secondary">
              <span className="text-2xl font-bold">3</span>
            </div>
          </div>
          <div className="col-span-5 hidden md:block"></div>
          <div className="col-span-5 hidden md:block"></div>
          <div className="relative col-span-2 col-start-1 flex w-full items-center justify-center md:col-start-auto">
            <div className="h-full w-4 bg-theme-secondary"></div>
            <div className="absolute flex h-16 w-16 items-center justify-center rounded-full bg-theme-secondary">
              <span className="text-2xl font-bold">4</span>
            </div>
          </div>
          <div className="col-span-10 col-start-4 py-10 md:col-span-5 md:col-start-auto">
            <GoalMapCard
              image={goals[3]?.image}
              alt={goals[3]!.imageDescription}
              description={goals[3]!.description}
              offset={60}
            />
          </div>
        </div>
      </Wrapper>
    </motion.div>
  );
};
export default GoalmapModule;
