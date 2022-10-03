import 'swiper/css';
import 'swiper/css/effect-cards';

import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import logomark from 'public/assets/logomark.svg';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { EffectCards } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  approachBgAnimation,
  approachWrapperAnimation,
} from '@/common/animations/approachAnimations';
import {
  StaggerItemAnimation,
  StaggerWrapperAnimation,
  TitleAnimation,
} from '@/common/animations/sharedAnimations';
import Wrapper from '@/Layout/Wrapper';
import tick from '@/public/assets/tick.svg';

import SecondaryTitle from '../Layout/components/SecondaryTitle';
import ApproachCard from './components/Card';

interface IApproachModule {
  approach: any[];
}

const tickMarks = ['Professional', 'Creative', 'One-of-a-kind '];

const ApproachModule = ({ approach = [] }: IApproachModule) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="relative w-full"
      ref={ref}
      initial="hidden"
      variants={approachWrapperAnimation}
      animate={controls}
      transition={{ when: 'beforeChildren' }}
    >
      <motion.div
        className="absolute top-0 -z-10 h-4/6 w-full bg-gray-300 md:h-2/6 lg:h-3/6"
        variants={approachBgAnimation}
      ></motion.div>
      <div className="z-10 py-20">
        <Wrapper>
          <div className="mx-auto mb-10 grid grid-cols-9 gap-5 px-16 md:px-0 lg:max-w-none">
            <div className="col-span-9 flex w-full grow items-start justify-start whitespace-nowrap text-lg md:items-center lg:col-span-3">
              <div className="overflow-hidden" key="col0">
                <motion.div variants={TitleAnimation}>
                  <SecondaryTitle>OUR APPROACH</SecondaryTitle>
                </motion.div>
              </div>
            </div>
            <div className="col-span-9 lg:col-span-6">
              <motion.div
                className="grid grid-cols-9"
                variants={StaggerWrapperAnimation}
              >
                {tickMarks.map((tickMark) => (
                  <motion.div
                    variants={StaggerItemAnimation}
                    key={tickMark}
                    className="col-span-9 flex items-center justify-start text-base md:col-span-3 md:justify-center lg:col-span-3"
                  >
                    <div className="min-w-[56px]">
                      <Image
                        src={tick}
                        height={56}
                        width={56}
                        alt="Checkmark icon"
                      />
                    </div>
                    {tickMark}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </Wrapper>
        <Wrapper width="narrower">
          <motion.div
            className=" mx-auto mt-12 hidden gap-5 sm:grid-cols-2 md:grid lg:grid-cols-3"
            variants={StaggerWrapperAnimation}
          >
            {approach.map((content) => (
              <motion.div variants={StaggerItemAnimation} key={content.id}>
                <ApproachCard
                  title={content.title}
                  description={content.description}
                  image={content.image}
                />
              </motion.div>
            ))}
            <div className="hidden h-full w-full items-center justify-center p-6 sm:flex lg:hidden ">
              <Image
                src={logomark}
                width={300}
                height={200}
                alt="Impact media small logo"
              />
            </div>
          </motion.div>
          <div className="flex md:hidden">
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards]}
              className="h-[400px] w-[300px]"
            >
              {approach.map((content) => (
                <SwiperSlide
                  key={content.id}
                  className="rounded-xl bg-transparent shadow-xl"
                >
                  <ApproachCard
                    key={content.id}
                    title={content.title}
                    description={content.description}
                    image={content.image}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Wrapper>
      </div>
    </motion.div>
  );
};
export default ApproachModule;
