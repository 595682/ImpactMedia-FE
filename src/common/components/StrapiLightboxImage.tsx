import Image from 'next/image';
import React from 'react';
import validUrl from 'valid-url';

export const getStrapiURL = () => {
  return process.env.NEXT_PUBLIC_API_ENDPOINT;
};

export const getImageUrl = (imageUrl?: string) => {
  if (!imageUrl) {
    return '/blog/placeholder.jpg';
  }

  if (validUrl.isUri(imageUrl)) {
    return imageUrl;
  }

  const composedUrl = `${getStrapiURL()}${imageUrl}`;
  if (validUrl.isUri(composedUrl)) {
    return composedUrl;
  }

  return '/blog/placeholder.jpg';
};

interface IStrapiLightboxImage {
  alt?: string | null | undefined;
  src?: string;
  width: number | null | undefined;
  height: number | null | undefined;
  objectFit?: 'cover' | 'initial';
  layout?: 'fill' | 'intrinsic';
  blur?: boolean;
  blurUrl?: string;
}

const StrapiLightboxImage = ({
  alt = '',
  height = 0,
  src,
  width = 0,
  layout = 'intrinsic',
  objectFit = 'initial',
  blur,
  blurUrl,
}: IStrapiLightboxImage) => {
  const defaultAlt = 'Default image caption';

  if (!width || !height) {
    console.error('MISSING WIDHT/HEIGHT FROM IMAGE COMPONENT!');
    return null;
  }
  if (blur && !blurUrl) {
    console.error('MISSING BLUR DATA URL!');
    return null;
  }

  const shouldBePassed = (property: any) => {
    if (layout === 'fill') {
      return undefined;
    }
    return property;
  };

  return (
    <Image
      src={getImageUrl(src)}
      width={shouldBePassed(width)}
      height={shouldBePassed(height)}
      alt={alt || defaultAlt}
      objectFit={objectFit}
      layout={layout}
      placeholder={blur ? 'blur' : 'empty'}
      blurDataURL={getImageUrl(blurUrl)}
    />
  );
};
export default StrapiLightboxImage;
