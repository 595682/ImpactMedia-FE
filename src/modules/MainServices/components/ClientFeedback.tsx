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
import StrapiImage from '@/common/components/StrapiImage';
import Swiper from '@/common/components/Swiper';
import Wrapper from '@/Layout/Wrapper';
import Space from '@/modules/Layout/components/Space';
import Subtitle from '@/modules/Layout/components/Subtitle';
import Title from '@/modules/Layout/components/Title';
import type { CompanyEntity } from '@/types';

import ClientFeedbackCard from './ClientFeedbackCard';

interface IClientFeedback {
  people: any[];
  companies: CompanyEntity[] | [];
  style?: 'light' | 'dark';
}
const ClientFeedback = ({
  people = [],
  style = 'light',
  companies = [],
}: IClientFeedback) => {
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
        {companies.length > 0 && (
          <>
            <Space amount="md" />
            <motion.div
              className="grid grid-cols-3 gap-10 lg:grid-cols-6"
              variants={StaggerWrapperAnimation}
            >
              {/* TODO: LONG LOGOS COLSPAN-2 */}
              {companies.map((company) => (
                <motion.div
                  key={company.id}
                  className="relative flex h-[80px] w-full  items-center justify-center"
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
          </>
        )}
        {/*  <Space amount="md" /> */}
        <motion.div className="hidden lg:block" variants={SlideUpAnimation()}>
          <Swiper slidesPerView={2.8} version={style}>
            {people.map((person) => (
              /*  <motion.div
                variants={StaggerItemAnimation}
                key={person.id}
                className="h-full"
              > */
              <ClientFeedbackCard
                person={person}
                key={person.id}
                color={style === 'dark' ? 'light' : 'dark'}
              />
              /*    </motion.div> */
            ))}
          </Swiper>
        </motion.div>
        <motion.div
          className="hidden md:block lg:hidden"
          variants={SlideUpAnimation()}
        >
          <Swiper slidesPerView={1.8} centered>
            {people.map((person) => (
              <ClientFeedbackCard
                person={person}
                key={person.id}
                color={style === 'dark' ? 'light' : 'dark'}
              />
            ))}
          </Swiper>
        </motion.div>
        <motion.div className="block md:hidden" variants={SlideUpAnimation()}>
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
