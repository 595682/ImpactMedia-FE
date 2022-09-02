import { ArrowRightIcon } from '@heroicons/react/outline';

import Wrapper from '@/Layout/Wrapper';

import Title from '../Layout/components/Title';

const MainHeroModulev4 = () => {
  return (
    <div className="relative h-[calc(100vh-100px)] overflow-hidden">
      <div className="absolute bottom-0 left-0 -z-40 h-full w-full bg-white"></div>
      <div className="absolute -z-20 h-full w-full">
        <Wrapper>
          <div className="relative inset-0  mt-10 h-full w-full overflow-hidden rounded-xl">
            <video
              src="/hero.mp4"
              className="absolute bottom-40 -z-20 m-20 aspect-1 h-full w-full object-cover"
              autoPlay
              muted
              loop
              preload="none"
            ></video>

            <div className="absolute bottom-40 -z-10 m-20 h-full w-full bg-theme-primary mix-blend-screen"></div>
          </div>
        </Wrapper>
      </div>
      <Wrapper>
        <div className="mx-auto flex h-full w-full flex-col justify-center py-8">
          <div className="flex w-full flex-1 flex-col justify-center rounded-xl pt-40 text-left text-white">
            <div className="w-max rounded-xl bg-theme-primary p-12 shadow-lg">
              <Title>
                <span className="block leading-none tracking-wide">We are</span>
                <Title>
                  <span className="whitespace-pre text-[6rem]  leading-none tracking-tight">
                    <span className="font-extrabold">IMPACT </span>
                    <span className="font-normal">MEDIA</span>
                  </span>
                </Title>
              </Title>
              <p className="mt-3 max-w-lg text-left text-lg sm:mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                illo blanditiis unde quis beatae maxime architecto dicta veniam
                magni aut!
              </p>
            </div>
          </div>
          <div className="w-full ">
            <div className="ml-20 bg-white py-2 text-theme-primary">
              <div className=" bg-transparent p-4 text-theme-primary">
                Discover our services
              </div>
              <div className="grid grid-cols-4 ">
                <div className="flex w-full flex-col items-center justify-start">
                  <div className="grid w-max bg-transparent p-4 text-center text-lg font-bold ">
                    <span> Video Production</span>
                    <span className="flex w-full items-center justify-end text-right text-base font-normal underline underline-offset-4">
                      Discover <ArrowRightIcon className="h-4 w-4" />
                    </span>
                  </div>
                </div>
                <span className="bg-transparent p-4 text-center text-lg">
                  Animated Video Production
                </span>
                <span className="bg-transparent p-4 text-center text-lg">
                  Event Communication
                </span>
                <span className="bg-transparent p-4 text-center text-lg">
                  Live Streams
                </span>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
export default MainHeroModulev4;
