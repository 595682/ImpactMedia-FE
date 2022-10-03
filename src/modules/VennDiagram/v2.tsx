import { services } from 'contents/eventComms';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import {
  defaultWrapperAnimation,
  SubtitleAnimation,
  TitleAnimation,
} from '@/common/animations/sharedAnimations';
import {
  vennBubble1,
  vennBubble2,
  vennBubble3,
  youBubble,
} from '@/common/animations/vennAnimations';
import Button from '@/common/components/buttons/button';

import Subtitle from '../Layout/components/Subtitle';
import Title from '../Layout/components/Title';
import Wrapper from '../Layout/components/Wrapper';

interface IVennProps {
  makeItPop: (content: any) => void;
}

const VennV2 = ({ makeItPop }: IVennProps) => {
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
      transition={{ when: 'beforeChildren' }}
    >
      <Wrapper>
        <div>
          <div className="overflow-hidden">
            <motion.div variants={TitleAnimation}>
              <Title>
                <p className="text-center">
                  OUR IMAGINATION IS{' '}
                  <span className="font-bold">LIMITLESS</span>
                </p>
              </Title>
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div variants={SubtitleAnimation}>
              <Subtitle>
                <p className="text-center">
                  ...and so are the things we can do for you
                </p>
              </Subtitle>
            </motion.div>
          </div>
        </div>
        <motion.div
          className="hidden grid-rows-6 lg:grid"
          style={{
            gridTemplateColumns: `repeat(24, 1fr)`,
            gridTemplateRows: `1fr`,
          }}
        >
          <motion.div
            variants={vennBubble1}
            className="z-30 col-span-12 col-start-7 row-start-2 flex aspect-1 flex-col items-center justify-center space-y-4 rounded-xl bg-white shadow-2xl lg:rounded-full"
          >
            <div className="flex h-[40%] w-[40%] items-center justify-center rounded-none">
              <Image src={services[0]?.image} alt="MARKETING Vector" />
            </div>
            <Subtitle>
              {/* MARKETING FB | GOOGLE */}
              <span className="font-bold">{services[0]?.title}</span>
            </Subtitle>
            <div className="space-x-2">
              <Button
                color="secondary"
                title={services[0]?.options[0]?.label!}
                onClick={() => makeItPop(services[0]?.options[0]?.popup!)}
              />
              <Button
                color="secondary"
                title={services[0]?.options[1]?.label!}
                onClick={() => makeItPop(services[0]?.options[1]?.popup!)}
              />
            </div>
          </motion.div>
          <motion.div
            variants={vennBubble2}
            className="col-span-12 col-start-2 row-start-1 mb-[-120px] flex aspect-1 flex-col items-center justify-center space-y-4 rounded-xl bg-white shadow-2xl lg:rounded-full"
          >
            <div className="flex h-[40%] w-[40%] items-center justify-center rounded-none">
              <Image
                src={services[1]?.image}
                alt="EVENT COMMUNICATIONS Vector"
              />
            </div>
            <Subtitle>
              {/* EVENT COMM BASIC | FULL */}
              <span className="font-bold">{services[1]?.title}</span>
            </Subtitle>
            <div className="space-x-2">
              <Button
                color="secondary"
                title={services[1]?.options[0]?.label!}
                onClick={() => makeItPop(services[1]?.options[0]?.popup!)}
              />
              <Button
                color="secondary"
                title={services[1]?.options[1]?.label!}
                onClick={() => makeItPop(services[1]?.options[1]?.popup!)}
              />
            </div>
          </motion.div>
          <motion.div
            variants={vennBubble3}
            className="col-span-12 col-start-12 row-start-1 mb-[-120px] flex aspect-1 flex-col items-center justify-center space-y-4 rounded-xl bg-white shadow-2xl lg:rounded-full"
          >
            <div className="flex h-[40%] w-[40%] items-center justify-center rounded-none">
              <Image
                src={services[2]?.image}
                alt="BRANDING & IDENTITY Vector"
              />
            </div>
            <Subtitle>
              <span className="font-bold">{services[2]?.title}</span>
            </Subtitle>
            {/* BRANDING VISUAL | VERBAL */}
            <div className="space-x-2">
              <Button
                color="secondary"
                title={services[2]?.options[0]?.label!}
                onClick={() => makeItPop(services[2]?.options[0]?.popup!)}
              />
              <Button
                color="secondary"
                title={services[2]?.options[1]?.label!}
                onClick={() => makeItPop(services[2]?.options[1]?.popup!)}
              />
            </div>
          </motion.div>
          <motion.div
            variants={youBubble}
            className="z-40 col-span-4 col-start-11 row-start-2 m-4 mt-[-80px] hidden aspect-1 items-center justify-center rounded-xl bg-white shadow-2xl lg:flex lg:rounded-full"
          >
            <span className="text-4xl font-black text-theme-secondary">
              YOU
            </span>
          </motion.div>
        </motion.div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 lg:hidden">
          {services.map((service) => (
            <div
              className=" flex flex-col items-center justify-center space-y-4 rounded-xl bg-white p-8 shadow-2xl"
              key={service.title}
            >
              <div className="flex aspect-1 max-h-40 items-center justify-center rounded-none">
                <Image src={service.image} alt={`${service.title} Vector`} />
              </div>
              <Subtitle>
                <p className="text-center text-xl font-bold">{service.title}</p>
              </Subtitle>
              <div className="flex flex-col items-center justify-center gap-4 space-x-2">
                <Button
                  color="secondary"
                  title={service.options[0]?.label!}
                  onClick={() => makeItPop(service.options[0]?.popup!)}
                />
                <Button
                  color="secondary"
                  title={service.options[1]?.label!}
                  onClick={() => makeItPop(service.options[1]?.popup!)}
                />
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </motion.div>
  );
};
export default VennV2;
