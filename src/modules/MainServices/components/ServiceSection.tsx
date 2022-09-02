import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { serviceCardVariants } from '@/common/animations/servicesAnimations';
import { defaultWrapperAnimation } from '@/common/animations/sharedAnimations';
import Button from '@/common/components/buttons/button';
import Title from '@/Layout/Title';
import Wrapper from '@/Layout/Wrapper';

const colors = {
  light: {
    bg: 'bg-white',
    text: 'text-theme-primary',
    gradientL: 'bg-gradient-to-r from-white to-transparent',
    gradientR: 'bg-gradient-to-l from-white to-transparent',
  },
  dark: {
    bg: 'bg-theme-primary',
    text: 'text-white',
    gradientL: 'bg-gradient-to-r from-theme-primary to-transparent',
    gradientR: 'bg-gradient-to-l from-theme-primary to-transparent',
  },
};

interface IServiceSection {
  color?: 'light' | 'dark';
  reverse?: boolean;
  title: any;
  description: string;
  link: string;
  videoUrl: string;
  poster: string;
}

const ServiceSection = ({
  color = 'light',
  reverse = false,
  title,
  description,
  link,
  videoUrl,
  poster,
}: IServiceSection) => {
  const [hovered, setHovered] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.8, triggerOnce: false });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      className={`overflow-hidden relative ${colors[color].text} ${
        reverse ? 'md:text-right' : 'md:text-left'
      } text-center`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      ref={ref}
      initial="hidden"
      variants={defaultWrapperAnimation}
      animate={controls}
    >
      <div className={`absolute -z-30 w-full h-full ${colors[color].bg}`}></div>
      <video
        src={videoUrl}
        poster={poster}
        className={`m-[-8px] absolute top-0 -z-20 aspect-1 h-full w-full object-cover  blur-sm transition-all duration-700 ${
          hovered ? 'md:blur-sm md:opacity-60' : 'md:blur-md md:opacity-20'
        } ${inView ? 'blur-sm opacity-60' : 'blur-md opacity-20'}`}
        autoPlay
        muted
        loop
      ></video>
      <Wrapper>
        <motion.div
          className="relative py-40"
          variants={serviceCardVariants(reverse)}
        >
          <div
            className={`flex md:gap-10 ${
              reverse ? 'md:flex-row-reverse' : 'md:flex-row'
            } justify-center items-stretch md:justify-start`}
          >
            <div>
              <Title size="xl3">{title}</Title>
              <div className="my-4 mb-6  max-w-[50ch]">{description}</div>
              <Link href={link} passHref scroll={false}>
                <a>
                  <Button color="secondary" title="DISCOVER" />
                </a>
              </Link>
            </div>
            <div className="aspect-1 h-full bg-gray-300"></div>
          </div>
        </motion.div>
      </Wrapper>
    </motion.div>
  );
};
export default ServiceSection;
