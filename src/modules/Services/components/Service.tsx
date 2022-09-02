import { ArrowRightIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import { useState } from 'react';

import CustomLink from '@/common/components/CustomLink';
import Title from '@/modules/Layout/components/Title';

interface IServiceCard {
  variant?: 'light' | 'dark';
  title1: string;
  title2: string;
  url: string;
}

const color = {
  dark: ' text-white',
  light: 'text-theme-primary',
};

const ServiceCard = ({
  variant = 'light',
  title1,
  title2,
  url,
}: IServiceCard) => {
  const [hovered, setHovered] = useState(false);

  return (
    <CustomLink href={url}>
      <div
        className={`${color[variant]} p-8 rounded-lg relative overflow-hidden cursor-pointer`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.video
          animate={hovered ? { scale: 1.1 } : { scale: 1 }}
          src="/hero.mp4"
          poster="/poster.jpg"
          className={`absolute inset-0 -z-20 aspect-1 h-full w-full object-cover  blur-sm transition-all duration-700 ${
            hovered ? 'blur-none' : 'blur-sm'
          }`}
          autoPlay={hovered}
          muted
          loop
        ></motion.video>
        <div className="absolute bottom-4 right-4 z-20 flex items-end justify-end text-white">
          <motion.div animate={hovered ? { x: 0 } : { x: 100 }}>
            <ArrowRightIcon className="h-6 w-6" />
          </motion.div>
        </div>
        <div className="absolute inset-0 -z-20 bg-theme-primary mix-blend-screen"></div>
        <div className="z-20 flex min-h-[200px] w-full flex-col items-center justify-center text-white">
          <div className="block text-center">
            <Title size="lg">{title1}</Title>
            <Title size="lg">
              <span className="font-bold">{title2}</span>
            </Title>
          </div>
          {/* <div className="flex justify-end">
          <Link href={url} passHref scroll={false}>
            <a>
              <Button color="secondary" title="MORE"></Button>
            </a>
          </Link>
        </div> */}
        </div>
      </div>
    </CustomLink>
  );
};
export default ServiceCard;
