import Link from 'next/link';

import TextButton from '@/common/components/buttons/textButton';
import StrapiImage from '@/common/components/StrapiImage';
import SwiperComponent from '@/common/components/Swiper';
import type { PortfolioElementEntity } from '@/types';
import displayEventType from '@/utils/displayEventType';

import Space from '../Layout/components/Space';
import Subtitle from '../Layout/components/Subtitle';
import Title from '../Layout/components/Title';
import Wrapper from '../Layout/components/Wrapper';
import PortfolioCard from '../Portfolio/components/PortfolioCard';
import Breadcrumbs from './components/BreadCrumbs';
import PortfolioFacts from './components/Facts';
import PortfolioGallery from './components/Gallery';
import MidHero from './components/MidHero';

interface IPortfolioElementModule {
  data: PortfolioElementEntity;
  morePosts: PortfolioElementEntity[] | [];
}
const PortfolioElementModule = ({
  data,
  morePosts,
}: IPortfolioElementModule) => {
  return (
    <>
      <div className="relative h-[50vh] w-full">
        <StrapiImage
          src={data.attributes?.heroImage?.data?.attributes?.url}
          height={data.attributes?.heroImage?.data?.attributes?.height}
          width={data.attributes?.heroImage?.data?.attributes?.width}
          objectFit="cover"
          layout="fill"
        />
        {/* <div className="absolute z-10 h-full w-full bg-theme-primary/50 mix-blend-multiply"></div> */}
        <div className="absolute bottom-0 z-20 flex h-2/3 w-full items-end bg-gradient-to-b from-transparent to-theme-primary text-white">
          <div className="w-full">
            <Wrapper>
              <Breadcrumbs
                title={displayEventType(data.attributes?.elementType)}
              />
              <Space custom="mt-2" />
              <Title size="xl2">{data.attributes?.title}</Title>
              <Space custom="mt-2" />
              <Subtitle>{data.attributes?.subtitle}</Subtitle>
            </Wrapper>
          </div>
        </div>
      </div>
      <div className="w-full bg-theme-primary py-20 text-white">
        <Wrapper width="narrower">
          <div className="grid grid-cols-12 ">
            <div className="col-span-12 mb-4 sm:col-span-4 md:mb-0">
              <p className="font-bold">{data.attributes?.brief?.subtitle}</p>
            </div>
            <div className="col-span-12 sm:col-span-8">
              <p className="mb-4 text-2xl font-bold">
                {data.attributes?.brief?.title}
              </p>
              <p>{data.attributes?.brief?.content}</p>
            </div>
          </div>
        </Wrapper>
      </div>
      <MidHero
        mainVideo={data.attributes?.mainVideoUrl}
        mainImage={data.attributes?.mainImage}
      />
      {data.attributes?.outcomes && (
        <PortfolioFacts outcomes={data.attributes?.outcomes || []} />
      )}
      {data?.attributes?.whatWeDid && (
        <Wrapper width="narrower">
          <div className="grid grid-cols-12 py-20">
            <div className="col-span-12 mb-4 md:col-span-4 md:mb-0">
              <p className="font-bold">
                {data.attributes?.whatWeDid?.subtitle}
              </p>
            </div>
            <div className="col-span-12 md:col-span-8">
              {data.attributes?.whatWeDid?.title && (
                <p className="mb-4 text-2xl font-bold">
                  {data.attributes?.whatWeDid?.title}
                </p>
              )}
              <p>{data.attributes?.whatWeDid?.content}</p>
            </div>
          </div>
        </Wrapper>
      )}
      {(data?.attributes?.gallery?.data?.length || []) > 0 && (
        <div className="w-full bg-gray-200 py-20">
          <Wrapper width="narrower">
            <PortfolioGallery images={data.attributes?.gallery?.data} />
          </Wrapper>
        </div>
      )}
      <div className="w-full  py-20">
        <Wrapper>
          <Title size="xl3">
            <span className="font-bold">MORE</span> WORK
          </Title>
          <Space />
          <div className="hidden w-full grid-cols-3 gap-10 rounded-lg lg:grid">
            {morePosts.map((portfolioElement, index) => (
              <PortfolioCard portfolioElement={portfolioElement} key={index} />
            ))}
          </div>
          <div className="hidden sm:block lg:hidden">
            <SwiperComponent slidesPerView={2.3}>
              {morePosts.map((portfolioElement, index) => (
                <PortfolioCard
                  portfolioElement={portfolioElement}
                  key={index}
                />
              ))}
            </SwiperComponent>
          </div>
          <div className="block sm:hidden">
            <SwiperComponent slidesPerView={1.3}>
              {morePosts.map((portfolioElement, index) => (
                <PortfolioCard
                  portfolioElement={portfolioElement}
                  key={index}
                />
              ))}
            </SwiperComponent>
          </div>
          <div className="mt-10 flex w-full justify-end">
            <Link href="/portfolio" passHref scroll={false}>
              <a>
                <TextButton title="EVEN MORE WORK" color="primary" />
              </a>
            </Link>
          </div>
        </Wrapper>
      </div>
    </>
  );
};
export default PortfolioElementModule;
