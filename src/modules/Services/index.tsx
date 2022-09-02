import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import {
  defaultWrapperAnimation,
  StaggerItemAnimation,
  StaggerWrapperAnimation,
  TitleAnimation,
} from '@/common/animations/sharedAnimations';

import Wrapper from '../Layout/components/Wrapper';
import ServiceCard from './components/Service';

interface IServicesModule {
  animated?: boolean;
  video?: boolean;
  streams?: boolean;
  event?: boolean;
}
const ServicesModule = ({
  animated = true,
  video = true,
  event = true,
  streams = true,
}: IServicesModule) => {
  let services = [
    {
      title1: 'ANIMATED',
      title2: 'VIDEO',
      visible: animated,
      dark: false,
      url: '/services/animated-video-production',
    },
    {
      title1: 'VIDEO',
      title2: 'PRODUCTION',
      visible: video,
      dark: false,
      url: '/services/video-production',
    },
    {
      title1: 'LIVE STREAMS',
      title2: 'WEBINARS',
      visible: streams,
      dark: false,
      url: '/services/live-stream',
    },
    {
      title1: 'EVENT COMMUNICATION',
      title2: 'PUBLIC RELATION 2.0',
      visible: event,
      dark: false,
      url: '/services/event-communication',
    },
  ];

  services = services.filter((service) => service.visible);

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="relative"
      ref={ref}
      initial="hidden"
      variants={defaultWrapperAnimation}
      animate={controls}
    >
      <div className="absolute inset-0 -z-40 h-1/2 bg-theme-primary"></div>
      <div className="z-20">
        <Wrapper width="narrower">
          <div className="overflow-hidden">
            <motion.div variants={TitleAnimation}>
              <p className="mb-8 text-white">Our other services:</p>
            </motion.div>
          </div>
          <motion.div
            variants={StaggerWrapperAnimation}
            className="grid gap-x-4 gap-y-8 sm:grid-cols-3 lg:gap-x-16"
          >
            {services.map((service) => (
              <motion.div variants={StaggerItemAnimation} key={service.title1}>
                <ServiceCard
                  key={service.title1}
                  title1={service.title1}
                  title2={service.title2}
                  url={service.url}
                />
              </motion.div>
            ))}
          </motion.div>
        </Wrapper>
      </div>
    </motion.div>
  );
};
export default ServicesModule;
