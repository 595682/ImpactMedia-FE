import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import {
  SlideUpAnimation,
  StaggerItemAnimation,
  StaggerWrapperAnimation,
  SubtitleAnimation,
} from '@/common/animations/sharedAnimations';
import { trustedClientsWrapperAnimation } from '@/common/animations/trustedClientsAnimations';
import StrapiImage from '@/common/components/StrapiImage';
import Subtitle from '@/Layout/Subtitle';
import Title from '@/Layout/Title';
import Wrapper from '@/Layout/Wrapper';
import type { ClientFeedbackEntity, CompanyEntity } from '@/types';

import Swiper from '../../common/components/Swiper';
import Space from '../Layout/components/Space';
import SwipeCard from './components/SwipeCard';

interface ITrustedclientsModule {
  feedbacks: ClientFeedbackEntity[] | [];
  companies: CompanyEntity[] | [];
}
const TrustedclientsModule = ({
  feedbacks,
  companies,
}: ITrustedclientsModule) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="py-20 text-theme-primary"
      ref={ref}
      initial="hidden"
      variants={trustedClientsWrapperAnimation}
      animate={controls}
      transition={{ when: 'beforeChildren' }}
    >
      <Wrapper>
        {/* <div className="overflow-hidden">
          <motion.div variants={SubtitleAnimation}>
            <Subtitle>Some of our</Subtitle>
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div variants={SubtitleAnimation}>
            <Title>
              <span className="font-bold">TRUSTED</span> CLIENTS
            </Title>
          </motion.div>
        </div> */}
        {/* COPYWR */}

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
        <Space amount="md" />
        <motion.div
          className="grid grid-cols-3 gap-10 lg:grid-cols-8"
          variants={StaggerWrapperAnimation}
        >
          {/* TODO: LONG LOGOS COLSPAN-2 */}
          {companies.map((company) => (
            <motion.div
              key={company.id}
              className="relative flex h-[60px] w-full  items-center justify-center"
              variants={StaggerItemAnimation}
            >
              <StrapiImage
                src={company.attributes?.logo?.data?.attributes?.url}
                alt="Client logo"
                height={company.attributes?.logo?.data?.attributes?.height}
                width={company.attributes?.logo?.data?.attributes?.width}
                layout="fill"
                objectFit="contain"
              />
            </motion.div>
          ))}
        </motion.div>
        <Space amount="md" />
        <motion.div variants={SlideUpAnimation(0.4)}>
          <Swiper slidesPerView={1.2}>
            {feedbacks.map((feedback) => (
              <SwipeCard
                key={feedback.id}
                name={feedback.attributes?.feedbackFrom?.name}
                feedback={feedback.attributes?.feedback}
                image={feedback.attributes?.feedbackFrom?.avatar}
                position={feedback.attributes?.feedbackFrom?.position}
                company={feedback.attributes?.company?.data?.attributes?.name}
              />
            ))}
          </Swiper>
        </motion.div>
      </Wrapper>
    </motion.div>
  );
};
export default TrustedclientsModule;
