import Wrapper from '@/Layout/Wrapper';

import Title from '../Layout/components/Title';

const MainHeroModulev3 = () => {
  return (
    <div className="h-[calc(100vh-100px)]">
      <div className="absolute bottom-0 left-0 -z-40 h-full w-full bg-theme-primary"></div>
      <div className="absolute h-full w-full ">
        <Wrapper>
          <div className="relative inset-0 -z-20 h-full w-full overflow-hidden">
            <video
              src="/hero.mp4"
              className="absolute bottom-40 left-40 -z-20 aspect-1 h-full w-full object-cover"
              autoPlay
              muted
              loop
              preload="none"
            ></video>

            <div className="absolute inset-0 -z-10 h-full w-full bg-theme-primary mix-blend-screen"></div>
            <div className="absolute left-40 h-full w-40 bg-gradient-to-r from-theme-primary to-transparent"></div>
            <div className="absolute right-0 h-full w-40 bg-gradient-to-l from-theme-primary to-transparent"></div>
          </div>
        </Wrapper>
      </div>
      <Wrapper>
        <div className="mx-auto flex h-full w-full flex-col justify-center py-8">
          <div className="ml-6 flex w-full flex-1 flex-col justify-center rounded-xl text-left text-white">
            <Title>
              <span className="block leading-none tracking-wide">We are</span>
              <Title>
                <span className="whitespace-pre text-[8rem] font-extrabold leading-none tracking-tight">
                  <span>IMPACT </span>
                  <span>MEDIA</span>
                </span>
              </Title>
            </Title>
            <p className="mt-3 max-w-lg text-left text-xl  font-black sm:mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              illo blanditiis unde quis beatae maxime architecto dicta veniam
              magni aut!
            </p>
          </div>
          <div className="w-full ">
            <div className="bg-transparent p-4 text-white">
              Discover our services
            </div>
            <div className="rounded-lg bg-white py-2 text-theme-primary">
              <div className="grid grid-cols-4 ">
                <span className=" bg-transparent p-4 text-center text-lg font-bold   ">
                  Video Production
                </span>
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
export default MainHeroModulev3;
