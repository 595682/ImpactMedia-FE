import StrapiLightboxImage from '@/common/components/StrapiLightboxImage';
import SwiperComponent from '@/common/components/Swiper';
import type { UploadFileEntity } from '@/types';

interface IPortfolioGallery {
  images: UploadFileEntity[] | null | undefined;
}
const PortfolioGallery = ({ images }: IPortfolioGallery) => {
  if (typeof images === 'undefined' || !images) {
    return null;
  }

  return (
    <>
      <div className="hidden md:block">
        <SwiperComponent slidesPerView={2.5}>
          {images.map((image, index) => (
            <div key={index} className="flex h-full">
              <div className="flex w-full overflow-hidden rounded-xl">
                <StrapiLightboxImage
                  src={image?.attributes?.url}
                  alt={image?.attributes?.alternativeText}
                  height={image?.attributes?.height}
                  width={image?.attributes?.width}
                />
              </div>
            </div>
          ))}
        </SwiperComponent>
      </div>
      <div className=" md:hidden">
        <SwiperComponent slidesPerView={1.2}>
          {images.map((image, index) => (
            <div key={index} className="flex h-full">
              <div className="flex w-full overflow-hidden rounded-xl">
                <StrapiLightboxImage
                  src={image?.attributes?.url}
                  alt={image?.attributes?.alternativeText}
                  height={image?.attributes?.height}
                  width={image?.attributes?.width}
                />
              </div>
            </div>
          ))}
        </SwiperComponent>
      </div>
    </>
  );
};
export default PortfolioGallery;
