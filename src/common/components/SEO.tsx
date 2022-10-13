import Head from 'next/head';
import { title } from 'process';

import type { ComponentSharedSeo } from '@/types';

const SEO = ({
  seoData,
  type,
}: {
  seoData: ComponentSharedSeo | null;
  type: 'article' | 'website';
}) => {
  const DEFAULT_SITE_NAME = '"Impact-Media"';
  const DEFAULT_CANONICAL = 'https://impact-media.eu';
  const DEFAULT_OG_IMAGE = `${DEFAULT_CANONICAL}/assets/logo_white.svg`;
  const DEFAULT_TITLE = `IMPACT MEDIA`;

  if (!seoData) {
    return null;
  }

  return (
    <Head>
      <title key="title">{`${DEFAULT_TITLE} – ${seoData?.metaTitle}`}</title>
      <meta name="description" content={seoData?.metaDescription} />
      <meta key="og_type" property="og:type" content={type} />
      <meta
        key="og_title"
        property="og:title"
        content={`${DEFAULT_TITLE} – ${seoData?.metaTitle}`}
      />
      <meta
        key="og_description"
        property="og:description"
        content={seoData?.metaDescription}
      />
      <meta key="og_locale" property="og:locale" content="en_IE" />
      <meta
        key="og_site_name"
        property="og:site_name"
        content={DEFAULT_SITE_NAME}
      />
      <meta
        key="og_url"
        property="og:url"
        content={seoData?.canonicalURL || 'https://impact-media.eu'}
      />
      <meta key="og_site_name" property="og:site_name" content="Impact-Media" />
      <meta
        key="og_image"
        property="og:image"
        content={seoData?.metaImage.data?.attributes?.url ?? DEFAULT_OG_IMAGE}
      />
      <meta
        key="og_image:alt"
        property="og:image:alt"
        content={`${title} | ${seoData?.metaImage.data?.attributes?.alternativeText}`}
      />
      <meta key="og_image:width" property="og:image:width" content="1200" />
      <meta key="og_image:height" property="og:image:height" content="630" />

      <meta name="robots" content="index,follow" />

      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <link rel="canonical" href={seoData?.canonicalURL || DEFAULT_CANONICAL} />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
