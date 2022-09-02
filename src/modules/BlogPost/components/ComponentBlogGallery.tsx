import SwiperComponent from '@/common/components/Swiper';
import type { UploadFileEntity } from '@/types';

import ComponentBlogImage from './ComponentBlogImage';

interface IComponentBlogGallery {
  images: UploadFileEntity[] | null | undefined;
}
const ComponentBlogGallery = ({ images }: IComponentBlogGallery) => {
  if (typeof images === 'undefined' || !images) {
    return null;
  }

  return (
    <div>
      <SwiperComponent slidesPerView={1}>
        {images.map((image, index) => (
          <div key={index} className="flex h-full">
            <ComponentBlogImage
              imageUrl={image?.attributes?.url}
              height={image?.attributes?.height}
              width={image?.attributes?.width}
              alt={image?.attributes?.alternativeText}
            />
          </div>
        ))}
      </SwiperComponent>
    </div>
  );
};
export default ComponentBlogGallery;
