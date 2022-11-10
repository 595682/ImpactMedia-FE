import 'swiper/css';

import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import { Mousewheel } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import Space from '@/modules/Layout/components/Space';

const colors = {
  light: {
    enabled: 'text-theme-primary',
    disabled: 'text-gray-300',
  },
  dark: {
    enabled: 'text-white',
    disabled: 'text-white/30',
  },
};

const NextButton = ({ version }: { version: 'dark' | 'light' }) => {
  const swiper = useSwiper();

  const [isDisabled, setDisabled] = useState(false);

  swiper.on('toEdge', () => {
    if (swiper.isEnd) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  });

  return (
    <button onClick={() => swiper.slideNext()} disabled={isDisabled}>
      <ArrowNarrowRightIcon
        className={`h-10 w-10 ${
          isDisabled ? colors[version].disabled : colors[version].enabled
        } transition-colors duration-300`}
      />
    </button>
  );
};

const PrevButton = ({ version }: { version: 'dark' | 'light' }) => {
  const swiper = useSwiper();

  const [isDisabled, setDisabled] = useState(false);

  useEffect(() => {
    if (swiper.isBeginning) {
      setDisabled(true);
    }
  }, []);

  swiper.on('slideChange', () => {
    if (swiper.isBeginning) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  });

  return (
    <button onClick={() => swiper.slidePrev()} disabled={isDisabled}>
      <ArrowNarrowLeftIcon
        className={`h-10 w-10 ${
          isDisabled ? colors[version].disabled : colors[version].enabled
        } transition-colors duration-300`}
      />
    </button>
  );
};

const TitleBar = ({
  title,
  controlTitle,
  version,
}: {
  title: React.ReactNode;
  controlTitle: boolean;
  version: 'dark' | 'light';
}) => {
  return (
    <>
      <div className="flex items-center">
        {title}
        {controlTitle && (
          <div className="flex justify-end mr-6 space-x-2 grow">
            <PrevButton version={version} />
            <NextButton version={version} />
          </div>
        )}
      </div>
      <Space amount="sm" />
    </>
  );
};

interface ISwiperProps {
  children: React.ReactNode[];
  version?: 'dark' | 'light';
  slidesPerView?: number;
  hijackScroll?: boolean;
  centered?: boolean;
  controlTitle?: boolean;
  title?: React.ReactNode;
}

const SwiperComponent = ({
  children = [],
  version = 'light',
  slidesPerView = 1.2,
  hijackScroll = false,
  controlTitle = false,
  title,
  centered,
}: ISwiperProps) => {
  if (children.length === 0) {
    return null;
  }

  return (
    <>
      <Swiper
        navigation
        speed={1000}
        spaceBetween={50}
        slidesPerView={slidesPerView}
        centeredSlides={centered}
        modules={[Mousewheel]}
        mousewheel={hijackScroll}
      >
        {controlTitle && (
          <span slot="container-start">
            <TitleBar
              title={title}
              controlTitle={controlTitle}
              version={version}
            />
          </span>
        )}
        {children.map((child, index) => (
          <SwiperSlide key={index} style={{ height: 'auto' }}>
            {child}
          </SwiperSlide>
        ))}
        {!controlTitle && (
          <div className="justify-end hidden w-full h-20 px-10 mt-6 space-x-5 md:flex">
            <PrevButton version={version} />
            <NextButton version={version} />
          </div>
        )}
      </Swiper>
    </>
  );
};

export default SwiperComponent;
