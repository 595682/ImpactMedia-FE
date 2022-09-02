import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import {
  caseStudyBgAnimation,
  caseStudyButtonAnimation,
  caseStudySubtitleAnimation,
  caseStudySwiperAnimation,
  caseStudyTitleAnimation,
  caseStudyWrapperAnimation,
} from '@/common/animations/caseStudyAnimations';
import {
  StaggerItemAnimation,
  StaggerWrapperAnimation,
} from '@/common/animations/sharedAnimations';
import TextButton from '@/common/components/buttons/textButton';
import CustomLink from '@/common/components/CustomLink';
import SwiperComponent from '@/common/components/Swiper';
import Space from '@/Layout/Space';
import Subtitle from '@/Layout/Subtitle';
import Title from '@/Layout/Title';
import Wrapper from '@/Layout/Wrapper';
import type { PortfolioElementEntity } from '@/types';

import PortfolioCard from './components/PortfolioCard';

interface IInlinePortfolioComponent {
  videos: PortfolioElementEntity[];
  variant?: 'dark' | 'light';
}

const InlinePortfolioComponent = ({
  videos,
  variant = 'light',
}: IInlinePortfolioComponent) => {
  const colors = {
    light: {
      bg: 'bg-white ',
      text: ' text-theme-primary',
    },
    dark: { bg: 'bg-theme-primary', text: 'text-white' },
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
      className={`relative py-20 ${colors[variant].text} overflow-hidden`}
      ref={ref}
      initial="hidden"
      variants={caseStudyWrapperAnimation}
      animate={controls}
      transition={{ when: 'beforeChildren' }}
    >
      <div
        className={`absolute inset-0  -z-20 h-full w-full ${colors[variant].bg}`}
      ></div>
      <motion.div
        variants={caseStudyBgAnimation}
        className={`absolute inset-0 -z-10 h-full w-full ${
          colors[variant === 'light' ? 'light' : 'light'].bg
        }`}
      ></motion.div>
      <Wrapper>
        <div className="overflow-hidden">
          <motion.div variants={caseStudySubtitleAnimation}>
            <Subtitle>Show & Tell.</Subtitle>
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div variants={caseStudyTitleAnimation}>
            <Title>
              <span className="font-bold">CASE</span> STUDIES
            </Title>
          </motion.div>
        </div>
        <Space amount="lg" />
        {/* DESKTOP */}
        <motion.dl
          className="hidden text-center sm:mx-auto sm:grid-cols-3 sm:gap-8 lg:grid"
          variants={StaggerWrapperAnimation}
        >
          {videos.map((portfolioElement) => (
            <motion.div
              variants={StaggerItemAnimation}
              key={portfolioElement.id}
            >
              <PortfolioCard
                key={portfolioElement.id}
                portfolioElement={portfolioElement}
              />
            </motion.div>
          ))}
        </motion.dl>
        {/* TABLET / PHABLET */}
        <motion.div
          className="hidden sm:block lg:hidden"
          variants={caseStudySwiperAnimation}
        >
          <SwiperComponent slidesPerView={2.3}>
            {videos.map((portfolioElement) => (
              <PortfolioCard
                forceHover
                key={portfolioElement.id}
                portfolioElement={portfolioElement}
              />
            ))}
          </SwiperComponent>
        </motion.div>
        {/* MOBILE */}
        <motion.div
          className="block sm:hidden"
          variants={caseStudySwiperAnimation}
        >
          <SwiperComponent slidesPerView={1.3}>
            {videos.map((portfolioElement) => (
              <PortfolioCard
                forceHover
                key={portfolioElement.id}
                portfolioElement={portfolioElement}
              />
            ))}
          </SwiperComponent>
        </motion.div>
        <Space amount="md" />
        <div className="flex justify-end">
          <CustomLink href={'/portfolio'}>
            <motion.div variants={caseStudyButtonAnimation}>
              <TextButton
                title="PORTFOLIO"
                color={variant === 'dark' ? 'white' : 'primary'}
              />
            </motion.div>
          </CustomLink>
        </div>
      </Wrapper>
    </motion.div>
  );
};
export default InlinePortfolioComponent;
