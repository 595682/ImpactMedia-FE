import Responsiveplayer from '@/common/components/Responsiveplayer';
import SwiperComponent from '@/common/components/Swiper';
// eslint-disable-next-line import/extensions
import Space from '@/Layout/Space';
import Subtitle from '@/Layout/Subtitle';
import Title from '@/Layout/Title';
import Wrapper from '@/Layout/Wrapper';
import type { PortfolioElementEntity } from '@/types';

interface IShowcaseModule {
  videos: PortfolioElementEntity[];
}
const ShowcaseModule = ({ videos }: IShowcaseModule) => {
  return (
    <div className="py-40 text-white bg-theme-primary">
      <Wrapper>
        <Subtitle>Draw inspiration from our previous work.</Subtitle>
        <Title>
          <span className="font-bold">VIDEO</span> SHOWCASE
        </Title>
        <Space amount="lg" />
        <dl className="hidden grid-cols-3 gap-8 mx-auto lg:grid ">
          {videos.map((video) => (
            <div key={video.id} className="flex flex-col bg-white">
              <Responsiveplayer
                url={video.attributes?.mainVideoUrl}
                controls={true}
                loop={false}
                muted={false}
                playing={false}
              />
            </div>
          ))}
        </dl>
        <div className="lg:hidden">
          <SwiperComponent slidesPerView={1.2}>
            {videos.map((video) => (
              <div key={video.id} className="flex flex-col bg-white">
                <Responsiveplayer url={video.attributes?.mainVideoUrl} />
              </div>
            ))}
          </SwiperComponent>
        </div>
      </Wrapper>
    </div>
  );
};
export default ShowcaseModule;
