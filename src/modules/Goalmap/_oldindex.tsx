/* import 'swiper/css';
import 'swiper/css/effect-cards'; */

import Image from 'next/image';
import type { ReactNode } from 'react';
import Xarrow, { Xwrapper } from 'react-xarrows';
import { EffectCards } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Space from '../Layout/components/Space';
import Subtitle from '../Layout/components/Subtitle';
import Title from '../Layout/components/Title';
import Wrapper from '../Layout/components/Wrapper';

interface IGoalmapModule {
  goals: {
    id: number;
    description: string | ReactNode;
    imageDescription: string;
    image: any;
  }[];
}

const defaults = 'rounded-xl p-4 z-10';

const GoalmapModule = ({ goals }: IGoalmapModule) => {
  return (
    <div className=" bg-theme-primary py-40 pb-20">
      <Wrapper>
        <div className="mb-20 flex flex-col items-center text-white">
          <Title size="xl3">
            <p className="text-center text-3xl font-bold sm:text-2xl md:text-3xl xl:text-5xl">
              VIDEO MARKETING FOR BUSINESSES ACROSS EUROPE
            </p>
          </Title>
          <Space custom="mb-2" />
          <Subtitle>
            <p className="text-center text-lg lg:text-2xl">
              With years of experience and hundreds of hours of content
              produced.
            </p>
          </Subtitle>
        </div>

        <div
          className="hidden h-full w-full grid-cols-12 transition-all duration-700 md:grid"
          style={{ gridTemplateRows: `repeat(6, minmax(0, 160px))` }}
        >
          <Xwrapper>
            <div
              className={`relative col-span-5 lg:col-span-3 col-start-1 lg:col-start-3 row-span-2 row-start-1 bg-white ${defaults} `}
              id="elem1"
            >
              <div className="flex h-full w-full flex-col space-y-4">
                <div className="flex h-1/2 w-full items-center justify-center">
                  <Image
                    src={goals[0]?.image}
                    alt={goals[0]!.imageDescription}
                  />
                </div>
                <p className="flex h-full items-center text-center">
                  {goals[0]?.description}
                </p>
              </div>
            </div>
            <div
              className={`relative col-span-5 lg:col-span-3 col-start-8 lg:col-start-9 row-span-2 row-start-2 bg-white ${defaults}`}
              id="elem2"
            >
              <div className="flex h-full w-full flex-col space-y-4">
                <div className="flex h-1/2 w-full items-center justify-center">
                  <Image
                    src={goals[1]?.image}
                    alt={goals[1]!.imageDescription}
                  />
                </div>
                <p className="flex h-full items-center text-center">
                  {goals[1]?.description}
                </p>
              </div>
            </div>
            <div
              className={`lg:col-span-3 col-span-5 lg:col-start-2 col-start-1 row-span-2 row-start-4  bg-white ${defaults}`}
              id="elem3"
            >
              <div className="flex h-full w-full flex-col space-y-4">
                <div className="flex h-1/2 w-full items-center justify-center">
                  <Image
                    src={goals[2]?.image}
                    alt={goals[2]!.imageDescription}
                  />
                </div>
                <p className="flex h-full items-center text-center">
                  {goals[2]?.description}
                </p>
              </div>
            </div>
            <div
              className={`col-span-5 lg:col-span-3 col-start-8 lg:col-start-8 row-span-2 row-start-5 bg-white ${defaults}`}
              id="elem4"
            >
              <div className="flex h-full w-full flex-col">
                <div className="flex h-1/2 w-full items-center justify-center">
                  <Image
                    src={goals[3]?.image}
                    alt={goals[3]!.imageDescription}
                  />
                </div>
                <p className="flex h-full items-center text-center">
                  {goals[3]?.description}
                </p>
              </div>
            </div>
            <Xarrow
              start={'elem1'}
              end="elem2"
              curveness={0.7}
              startAnchor={'middle'}
              endAnchor="middle"
              strokeWidth={16}
              lineColor="#fdb924"
              animateDrawing={3}
              /* showHead={false} */
            />
            <Xarrow
              start={'elem2'}
              end="elem3"
              curveness={0.7}
              startAnchor={'middle'}
              endAnchor="middle"
              strokeWidth={16}
              lineColor="#fdb924"
              animateDrawing={3}
              /* showHead={false} */
            />
            <Xarrow
              start={'elem3'}
              end="elem4"
              startAnchor={'middle'}
              endAnchor="middle"
              curveness={0.7}
              strokeWidth={16}
              lineColor="#fdb924"
              animateDrawing={3}
              /* showHead={false} */
            />
          </Xwrapper>
        </div>
        <div className="block md:hidden">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="h-[400px] w-[300px]"
            /* loop={true} */
          >
            {goals.map((goal) => (
              <SwiperSlide key={goal.id}>
                <div
                  className={`relative h-full w-full overflow-hidden rounded-xl bg-white p-8 shadow-md after:absolute after:inset-0 after:h-full after:w-2 after:bg-theme-secondary`}
                >
                  <div className="flex h-full w-full flex-col space-y-4">
                    <div className="flex h-1/2 w-full items-center justify-center">
                      <Image src={goal.image} alt={goal.imageDescription} />
                    </div>
                    <p className="flex h-full items-center text-center text-lg">
                      {goal.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Wrapper>
    </div>
  );
};
export default GoalmapModule;
