import 'swiper/css';
import 'swiper/css/effect-cards';

import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import logomark from 'public/assets/logoMark.svg';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { EffectCards } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  factsBottomBgAnimation,
  factsTopBgAnimation,
} from '@/common/animations/factsAnimations';
import {
  defaultWrapperAnimation,
  SlideUpAnimation,
  StaggerItemAnimation,
  StaggerWrapperAnimation,
  SubtitleAnimation,
  TitleAnimation,
} from '@/common/animations/sharedAnimations';
import Wrapper from '@/Layout/Wrapper';
import ApproachCard from '@/modules/Approach/components/Card';
import Space from '@/modules/Layout/components/Space';
import Title from '@/modules/Layout/components/Title';

interface IFacts {
  facts: any[];
  title: string;
  subtitle: string;
}
const Facts = ({ facts = [], title, subtitle }: IFacts) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
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
      variants={defaultWrapperAnimation}
      animate={controls}
    >
      <motion.div
        className="absolute top-0 -z-20 h-full w-full bg-gray-200"
        variants={factsTopBgAnimation}
      ></motion.div>
      <motion.div
        className="absolute bottom-0 -z-10 h-1/2 w-full bg-theme-primary"
        variants={factsBottomBgAnimation}
      ></motion.div>
      <Wrapper>
        <div className="max-w-[54ch] lg:max-w-none">
          <div className="overflow-hidden">
            <motion.div variants={TitleAnimation}>
              <Title size="xl2">
                <span className="font-bold uppercase text-theme-primary">
                  {title}
                </span>
              </Title>
            </motion.div>
          </div>
        </div>
        <div className="overflow-hidden">
          <motion.div variants={SubtitleAnimation}>
            <span className="block text-base leading-tight tracking-wide text-theme-primary md:text-2xl">
              {subtitle}
            </span>
          </motion.div>
        </div>

        <Space amount="md" />
        <motion.div
          variants={StaggerWrapperAnimation}
          className="mx-auto mt-12 hidden gap-8 md:grid md:grid-cols-2 lg:max-w-none lg:grid-cols-3 lg:gap-20"
        >
          {facts.map((content) => (
            <motion.div variants={StaggerItemAnimation} key={content.id}>
              <ApproachCard
                key={content.id}
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
        <motion.div className="flex md:hidden" variants={SlideUpAnimation()}>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="h-[400px] w-[300px]"
          >
            {facts.map((content) => (
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
        </motion.div>
      </Wrapper>
    </motion.div>
  );
};
export default Facts;
