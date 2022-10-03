/* eslint-disable tailwindcss/no-custom-classname */
import { ArrowRightIcon } from '@heroicons/react/outline';
import { heroOptions } from 'contents/index';
import { mainHeroSubtitle } from 'contents/landingPage';
import {
  AnimatePresence,
  motion,
  useAnimation,
  useTransform,
  useViewportScroll,
} from 'framer-motion';
import type { SyntheticEvent } from 'react';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import {
  mainHeroButtonVariants,
  mainHeroControlsVariants,
  mainHeroTitleVariants,
  mainHeroVariants,
} from '@/common/animations/mainHero';
import Button from '@/common/components/buttons/button';
import CustomLink from '@/common/components/CustomLink';
import Wrapper from '@/Layout/Wrapper';
import { useAppContext } from '@/lib/context/state';

import Title from '../Layout/components/Title';

// TODO: ADD CORRESPONDING POSTERS!

const MainHeroModule = () => {
  const [selectedId, setSelectedId] = useState(0);
  const { actions } = useAppContext();

  const handleSelectSection = (e: SyntheticEvent, id: number) => {
    e.preventDefault();
    setSelectedId(id);
  };

  const handleGoToNext = () => {
    if (selectedId + 1 === heroOptions.length) {
      return setSelectedId(0);
    }
    return setSelectedId(selectedId + 1);
  };

  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, 100]);

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="h-[100vh]"
      ref={ref}
      initial="hidden"
      variants={mainHeroVariants}
      animate={controls}
      transition={{ when: 'beforeChildren' }}
    >
      <AnimatePresence>
        {heroOptions.map(
          (option) =>
            option.id === selectedId && (
              <motion.div
                key={option.id}
                className="absolute top-0 -z-20 aspect-1 h-full w-full object-cover"
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
              >
                <motion.video
                  className="absolute top-0 -z-20 aspect-1 h-full w-full object-cover blur-sm"
                  autoPlay
                  muted
                  onEnded={handleGoToNext}
                  playsInline
                  poster={option.poster}
                >
                  <source src={option.video} />
                </motion.video>
              </motion.div>
            )
        )}
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 -z-20 h-full w-full bg-theme-primary mix-blend-screen"
        ></motion.div>
      </AnimatePresence>
      <div className="absolute bottom-0 left-0 -z-10 h-[60%] w-full bg-gradient-to-t from-theme-primary to-transparent md:h-60"></div>
      <div className="absolute bottom-0 left-0 -z-40 h-full w-full bg-theme-primary"></div>

      <Wrapper>
        <div className="mx-auto flex h-full w-full flex-col justify-center py-8">
          <motion.div
            className="ml-2 flex w-full flex-1 flex-col justify-center rounded-xl pb-8 text-left text-white sm:justify-center sm:pb-0 md:ml-6"
            style={{ y: y1 }}
          >
            <motion.div
              variants={mainHeroTitleVariants}
              transition={{ ease: 'easeInOut', duration: 1 }}
            >
              {/* <Title>
                <span className="block leading-none tracking-wide">
                  Tell your
                </span>
              </Title>
              <Title size="xl4">
                <span className="whitespace-pre font-extrabold leading-none tracking-tight lg:text-[8rem]">
                  <span>STORY </span>
                </span>
              </Title> */}
              <Title>
                <span className="block leading-none tracking-wide">We are</span>
              </Title>
              <Title size="xl4">
                <span className="whitespace-pre font-extrabold leading-none tracking-tight lg:text-[8rem]">
                  <span>IMPACT </span>
                  <span>MEDIA</span>
                </span>
              </Title>
              <p className="mt-3 max-w-xs text-left sm:mt-5 lg:max-w-lg  lg:text-xl xl:font-black">
                {mainHeroSubtitle}
              </p>
              <motion.div className="mt-6" variants={mainHeroButtonVariants}>
                <Button
                  color="secondary"
                  title="TELL YOUR STORY"
                  onClick={() => actions.openQuote(99)}
                />
                {/* <Button
                  color="secondary"
                  title="GET A QUOTATION"
                  onClick={() => actions.openQuote(99)}
                /> */}
              </motion.div>
            </motion.div>
          </motion.div>
          <div className="overflow-hidden">
            <motion.div
              className="z-50 w-full"
              variants={mainHeroControlsVariants}
              transition={{ ease: 'easeInOut', duration: 0.8, delay: 0.4 }}
            >
              <div className="hidden bg-transparent p-4 text-white sm:block">
                Discover our services
              </div>
              <div className="rounded-xl bg-white py-2 text-theme-primary">
                <div className="flex overflow-y-scroll scrollbar-hide lg:grid lg:grid-cols-4">
                  {heroOptions.map((option) => (
                    <div
                      /* ref={selectedId === option.id ? ref : null} */
                      key={option.id}
                      className="flex w-full min-w-min flex-col items-center justify-start"
                    >
                      <div
                        className={`grid w-max bg-transparent p-2 px-4 md:p-4 text-center md:text-lg text-base ${
                          selectedId === option.id ? 'font-bold' : 'font-normal'
                        } `}
                      >
                        <a
                          href="#"
                          className="cursor-pointer md:mb-2"
                          onClick={(e) => handleSelectSection(e, option.id)}
                        >
                          {' '}
                          {option.title}
                        </a>
                        <div className="overflow-hidden">
                          <AnimatePresence>
                            {selectedId === option.id && (
                              <motion.div
                                key={option.id}
                                exit={{ y: '100%' }}
                                animate={{ y: 0 }}
                                initial={{ y: '100%' }}
                                transition={{
                                  duration: 0.4,
                                  ease: 'easeInOut',
                                  type: 'tween',
                                }}
                              >
                                <CustomLink href={option.url} passHref>
                                  <span className="flex w-full items-center justify-end text-right text-sm font-normal underline-offset-4 hover:underline md:text-base">
                                    Discover{' '}
                                    <ArrowRightIcon className="h-4 w-4" />
                                  </span>
                                </CustomLink>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Wrapper>
    </motion.div>
  );
};
export default MainHeroModule;
