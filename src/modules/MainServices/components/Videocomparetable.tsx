import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import {
  tableBgVariants,
  tableRowVariants,
  tableWrapperVariants,
} from '@/common/animations/compareTableAnimations';
import {
  defaultWrapperAnimation,
  TitleAnimation,
} from '@/common/animations/sharedAnimations';
import Subtitle from '@/Layout/Subtitle';
import Title from '@/Layout/Title';
import Wrapper from '@/Layout/Wrapper';

import TableExample from './Example';

type TTableExample = {
  title: string;
  content: string;
  isOk: boolean;
};

interface IVideocomparetable {
  compareTableRows: {
    id: number;
    title: string;
    good: TTableExample;
    bad: TTableExample;
  }[];
}
const Videocomparetable = ({ compareTableRows }: IVideocomparetable) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      className=" relative overflow-hidden pb-20 pt-10 text-white"
      ref={ref}
      initial="hidden"
      variants={defaultWrapperAnimation}
      animate={controls}
    >
      <motion.div
        className="absolute inset-0 -z-10 bg-theme-primary"
        variants={tableBgVariants}
      ></motion.div>
      <Wrapper>
        <div className="overflow-hidden">
          <motion.div variants={TitleAnimation}>
            <Subtitle>What sets us apart?</Subtitle>
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div variants={TitleAnimation}>
            <div className="max-w-[40ch] sm:max-w-[70ch] lg:max-w-none">
              <Title size="xl3">
                <span className="font-bold">THE IMPACT MEDIA X FACTOR</span>
              </Title>
            </div>
          </motion.div>
        </div>
        <motion.div className="mt-20">
          <motion.div
            className=" w-full divide-y-[1px] rounded-xl bg-white py-4 px-10 text-theme-primary"
            variants={tableWrapperVariants}
          >
            {compareTableRows.map((row) => (
              <motion.div
                variants={tableRowVariants}
                className="grid grid-cols-12 gap-2 py-8"
                key={row.id}
              >
                <div className="col-span-12 mb-4 md:col-span-3 md:mb-0">
                  <span className="text-2xl">{row.title}</span>
                </div>
                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                  <TableExample
                    title={row.bad.title}
                    content={row.bad.content}
                    isOk={row.bad.isOk}
                  />
                </div>
                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                  <TableExample
                    title={row.good.title}
                    content={row.good.content}
                    isOk={row.good.isOk}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Wrapper>
    </motion.div>
  );
};
export default Videocomparetable;
