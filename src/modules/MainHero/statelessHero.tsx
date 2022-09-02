/* eslint-disable tailwindcss/no-custom-classname */
import {
  motion,
  useAnimation,
  useTransform,
  useViewportScroll,
} from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import {
  mainHeroBgVariants,
  mainHeroButtonVariants,
  mainHeroTitleVariants,
  mainHeroVariants,
} from '@/common/animations/mainHero';
import Button from '@/common/components/buttons/button';
import Wrapper from '@/Layout/Wrapper';
import { useAppContext } from '@/lib/context/state';

interface IMainHeroProps {
  video: string;
  poster: string;
  title: any;
  light: boolean;
  serviceId: number;
}

// TODO: ADD CORRESPONDING POSTERS!

const StatelessHero = ({
  video,
  poster,
  title,
  light,
  serviceId,
}: IMainHeroProps) => {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, 100]);
  const { actions } = useAppContext();

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
      variants={mainHeroVariants}
      animate={controls}
      transition={{ when: 'beforeChildren' }}
      initial="hidden"
    >
      <motion.div className="absolute top-0 -z-20 aspect-1 h-full w-full overflow-hidden object-cover">
        <motion.video
          className="absolute top-0 -z-20 aspect-1 h-full w-full object-cover blur-sm"
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          variants={mainHeroBgVariants}
        >
          <source src={video} />
        </motion.video>
      </motion.div>
      <div
        className={`absolute bottom-[-8px] left-0 -z-10 h-10 w-full bg-white ${
          light ? 'from-white' : 'from-theme-primary'
        } to-transparent md:h-5`}
      ></div>
      <div className="absolute bottom-0 left-0 -z-40 h-full w-full bg-theme-primary"></div>
      <div className="absolute inset-0 -z-20 h-full w-full bg-theme-primary mix-blend-screen"></div>

      <Wrapper>
        <div className="mx-auto flex h-full w-full flex-col justify-center py-8">
          <motion.div
            className="ml-2 flex w-full flex-1 flex-col justify-center rounded-xl pb-8 text-left text-white sm:pb-0 md:ml-6"
            style={{ y: y1 }}
          >
            <motion.div
              variants={mainHeroTitleVariants}
              transition={{ ease: 'easeInOut', duration: 1 }}
            >
              {title}
              <motion.div className="mt-6" variants={mainHeroButtonVariants}>
                <Button
                  color="secondary"
                  title="GET A QUOTATION"
                  onClick={() => actions.openQuote(serviceId)}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </Wrapper>
    </motion.div>
  );
};
export default StatelessHero;
