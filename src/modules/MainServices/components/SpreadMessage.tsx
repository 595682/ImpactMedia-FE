import { motion, useAnimation } from 'framer-motion';
import offer_1 from 'public/assets/services/offer_1.svg';
import offer_2 from 'public/assets/services/offer_2.svg';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import {
  defaultWrapperAnimation,
  SlideUpAnimation,
  SubtitleAnimation,
  TitleAnimation,
} from '@/common/animations/sharedAnimations';
import Responsiveplayer from '@/common/components/Responsiveplayer';
import Subtitle from '@/Layout/Subtitle';
import Title from '@/Layout/Title';
import Wrapper from '@/Layout/Wrapper';

import SpreadMessageCard from './SpreadMessageCard';

interface ISpreadMessage {
  title: string;
  subtitle: string;
  videoURL: string;
}
const SpreadMessage = ({ title, subtitle, videoURL }: ISpreadMessage) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="py-20"
      ref={ref}
      initial="hidden"
      variants={defaultWrapperAnimation}
      animate={controls}
    >
      <Wrapper>
        <div className="overflow-hidden">
          <motion.div variants={SubtitleAnimation}>
            <Subtitle>{subtitle}</Subtitle>
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div variants={TitleAnimation}>
            <Title size="xl3">
              <span className="font-bold">{title}</span>
            </Title>
          </motion.div>
        </div>

        <div className="grid w-full grid-cols-12 mt-12">
          <div className="grid grid-cols-1 col-span-12 gap-8 md:grid-cols-2 lg:col-span-6 lg:grid-cols-1 lg:space-y-6 ">
            <motion.div
              className="flex items-center justify-center col-span-1"
              variants={SlideUpAnimation()}
            >
              <SpreadMessageCard
                image={offer_1}
                title="CAPTURE THEIR ATTENTION"
                content="We dive deep into your goals, ideas, and target audience, learn all about your message, and create a comprehensive strategy to help you tell it."
              />
            </motion.div>
            <motion.div
              className="flex items-center justify-center col-span-1"
              variants={SlideUpAnimation()}
            >
              <SpreadMessageCard
                image={offer_2}
                title="WIN THEIR HEARTS"
                content="We piece together the different parts of the puzzle, including scripting, storyboarding, filming, and editing, to bring your message to life and speak to the hearts of many."
              />
            </motion.div>
          </div>
          <motion.div
            variants={SlideUpAnimation(1)}
            className="grid h-full col-span-12 mt-12 lg:col-span-6 lg:mt-0"
          >
            <Responsiveplayer url={videoURL} />
          </motion.div>
        </div>
      </Wrapper>
    </motion.div>
  );
};
export default SpreadMessage;
