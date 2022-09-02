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
    <div className="bg-theme-primary py-40 text-white">
      <Wrapper>
        <Subtitle>Draw inspiration from our previous work.</Subtitle>
        <Title>
          <span className="font-bold">VIDEO</span> SHOWCASE
        </Title>
        <Space amount="lg" />
        <dl className="mx-auto hidden grid-cols-3 gap-8 lg:grid ">
          {videos.map((video) => (
            <div key={video.id} className="flex flex-col bg-white">
              <Responsiveplayer url={video.attributes?.mainVideoUrl} />
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
