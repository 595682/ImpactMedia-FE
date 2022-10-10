import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import {
  defaultWrapperAnimation,
  ExpandBgAnimation,
  StaggerItemAnimation,
  StaggerWrapperAnimation,
  SubtitleAnimation,
  TitleAnimation,
} from '@/common/animations/sharedAnimations';

import Subtitle from '../Layout/components/Subtitle';
import Title from '../Layout/components/Title';
import Wrapper from '../Layout/components/Wrapper';

const highlights = [
  { id: 0, image: 'docs.jpg', alt: 'Branded documents' },
  { id: 1, image: 'newsletter.jpg', alt: 'Mail templates' },
  { id: 2, image: 'chimp.jpg', alt: 'Conference invitations' },
  { id: 3, image: 'logo.jpg', alt: 'Logo design' },
];

const EventHighlightModule = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="relative py-10 pb-20"
      ref={ref}
      initial="hidden"
      variants={defaultWrapperAnimation}
      animate={controls}
      transition={{ when: 'beforeChildren' }}
    >
      <motion.div
        variants={ExpandBgAnimation}
        className="absolute inset-0 -z-10 bg-theme-primary"
      ></motion.div>
      <Wrapper>
        <div className="overflow-hidden">
          <motion.div variants={SubtitleAnimation}>
            <Subtitle>
              <span className="text-white">
                Our latest branding and identity materials
              </span>
            </Subtitle>
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div variants={TitleAnimation}>
            <Title>
              <span className="text-white">HIGHLIGHTS</span>
            </Title>
          </motion.div>
        </div>
      </Wrapper>
      <Wrapper width="narrower">
        <motion.div
          variants={StaggerWrapperAnimation}
          className="mt-20 grid  gap-12 overflow-hidden sm:grid-cols-2 lg:gap-14"
        >
          {highlights.map((highlight) => (
            <motion.div
              variants={StaggerItemAnimation}
              key={highlight.id}
              className="flex aspect-1 w-full overflow-hidden rounded-lg bg-slate-300"
            >
              <Image
                src={`/assets/images/highlights/${highlight.image}`}
                width={1000}
                height={1000}
                alt={highlight.alt}
              />
            </motion.div>
          ))}
        </motion.div>
      </Wrapper>
    </motion.div>
  );
};
export default EventHighlightModule;
