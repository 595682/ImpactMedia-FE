import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import {
  defaultWrapperAnimation,
  StaggerItemAnimation,
  StaggerWrapperAnimation,
  TitleAnimation,
} from '@/common/animations/sharedAnimations';
import {
  summaryHeaderAnimation,
  summaryStaggerItemAnimation,
} from '@/common/animations/summaryAnimations';
import Title from '@/modules/Layout/components/Title';
import Wrapper from '@/modules/Layout/components/Wrapper';
import tick from '@/public/assets/tick.svg';

interface ISummary {
  tiers: any[];
}
const Summary = ({ tiers }: ISummary) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="bg-theme-primary py-20"
      ref={ref}
      initial="hidden"
      variants={defaultWrapperAnimation}
      animate={controls}
    >
      <Wrapper>
        <div className="grid grid-cols-12">
          <div className="col-span-12 mb-6 md:col-span-6 md:mb-0 lg:col-span-5">
            <div className="overflow-hidden">
              <motion.div variants={TitleAnimation}>
                <Title size="xl3">
                  <span className="text-white">
                    TO <span className="font-bold">SUMMARIZE</span>
                  </span>
                </Title>
              </motion.div>
            </div>
          </div>
          <motion.div
            variants={StaggerWrapperAnimation}
            className="col-span-12 space-y-6 text-white sm:col-span-6 md:col-span-5 lg:col-span-4"
          >
            <motion.p key={1} variants={StaggerItemAnimation}>
              Are you looking for a proven company to boost your marketing with
              great content?
            </motion.p>
            <motion.p key={2} variants={StaggerItemAnimation}>
              Are you looking for expert input for your marketing offensive?
            </motion.p>
            <motion.p key={3} variants={StaggerItemAnimation}>
              Then you are at the right place.
            </motion.p>
          </motion.div>
        </div>
        <motion.div
          variants={StaggerWrapperAnimation}
          className="mt-24 space-y-12 lg:mx-12 lg:grid lg:grid-cols-3 lg:gap-x-16 lg:space-y-0"
        >
          {tiers.map((tier) => (
            <motion.div
              variants={StaggerItemAnimation}
              key={tier.title}
              className="flex flex-col"
            >
              <div className="overflow-hidden">
                <motion.h3
                  className="mb-6 text-2xl text-theme-secondary"
                  variants={summaryHeaderAnimation}
                >
                  {tier.title}
                </motion.h3>
              </div>
              <div className="flex flex-col rounded-lg border border-gray-200 bg-white px-8 py-4 shadow-sm">
                <div className="flex-1">
                  <motion.ul
                    variants={StaggerWrapperAnimation}
                    role="list"
                    className="mt-6 grid space-y-4 sm:grid-cols-2 lg:grid-cols-1"
                  >
                    {tier.features.map((feature: string) => (
                      <motion.li
                        key={feature}
                        className="flex"
                        variants={summaryStaggerItemAnimation}
                      >
                        <div
                          style={{
                            minWidth: 56,
                          }}
                        >
                          <Image
                            src={tick}
                            height={56}
                            width={56}
                            alt="Checkmark icon"
                          />
                        </div>
                        <span className="my-auto ml-3 text-base text-theme-primary">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Wrapper>
    </motion.div>
  );
};
export default Summary;
