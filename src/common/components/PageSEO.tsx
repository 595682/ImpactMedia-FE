import Head from 'next/head';

const PageSEO = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const DEFAULT_SITE_NAME = 'Impact-Media';
  const DEFAULT_CANONICAL =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://impact-media.eu/';
  const DEFAULT_OG_IMAGE = `${DEFAULT_CANONICAL}/assets/logo_white.svg`;
  const DEFAULT_TITLE = `IMPACT MEDIA`;

  return (
    <Head>
      <title key="title">{title || DEFAULT_TITLE}</title>
      <meta name="description" content={description} />
      <meta key="og_type" property="og:type" content="website" />
      <meta
        key="og_title"
        property="og:title"
        content={title || DEFAULT_TITLE}
      />
      <meta
        key="og_description"
        property="og:description"
        content={description}
      />
      <meta key="og_locale" property="og:locale" content="en_IE" />
      <meta
        key="og_site_name"
        property="og:site_name"
        content={DEFAULT_SITE_NAME}
      />
      <meta key="og_url" property="og:url" content={DEFAULT_CANONICAL} />
      <meta key="og_site_name" property="og:site_name" content="Impact-Media" />
      <meta key="og_image" property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta
        key="og_image:alt"
        property="og:image:alt"
        content={title || DEFAULT_TITLE}
      />
      <meta key="og_image:width" property="og:image:width" content="1200" />
      <meta key="og_image:height" property="og:image:height" content="630" />

      <meta name="robots" content="index,follow" />

      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <link rel="canonical" href={DEFAULT_CANONICAL} />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
  );
};

export default PageSEO;
