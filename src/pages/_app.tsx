/* eslint-disable no-useless-escape */
import '../styles/global.css';

import { ApolloProvider } from '@apollo/client';
import { AnimatePresence, motion } from 'framer-motion';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { useState } from 'react';

import ClientOnly from '@/common/components/ClientOnly';
import { AppWrapper } from '@/lib/context/state';
import client from '@/lib/gql/client';
import QuotationWindowModule from '@/modules/QuotationWindow';

const containerVariants = {
  fadeOut: {
    opacity: 0,
    transition: {
      duration: 1.4,
    },
  },
  wait: {
    x: 0,
    transition: {
      duration: 1,
    },
  },
  visible: {
    opacity: 1,
  },
};

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  const [origin, setOrigin] = useState(true);

  const coverVariants = {
    exit_initial: { x: 0 },
    exit_animate: {
      x: origin ? '100%' : '-100%',
      transition: {
        duration: 1.2,
        ease: [0.8, 0.77, 0, 1],
        type: 'tween',
      },
    },
    exit_exit: {
      x: 0,
      transition: {
        duration: 1.2,
        ease: [0.8, 0.77, 0, 1],
        type: 'tween',
      },
    },
  };

  return (
    <AppWrapper>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>

      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NHMKPWX');
      `}
      </Script>
      <Script
        id="sopro.io"
        dangerouslySetInnerHTML={{
          __html: `(function (o, u, t, b, a, s, e) {
        window[b] = window[b] || {}; (e = e || [])['key'] = o; e['__obr'] = u.location.href; a = [];
        u.location.search.replace('?', '').split('&').forEach(function (q) { if (q.startsWith(b) || q.startsWith('_obid')) e[q.split('=')[0]] = q.split('=')[1]; });
        e['_obid'] = e['_obid'] || (u.cookie.match(/(^|;)\s*_obid\s*=\s*([^;]+)/) || []).pop() || 0;
        for (k in e) { if (e.hasOwnProperty(k)) a.push(encodeURIComponent(k) + '=' + encodeURIComponent(e[k])); }
        s = u.createElement('script'); s.src = t + '?' + a.join('&'); u.head.appendChild(s);
    })('ee1a8c55-ed38-4cb2-85c8-f5c0173aece9', document, 'https://plugin.sopro.io/hq.js', 'outbase')`,
        }}
      ></Script>
      <ApolloProvider client={client}>
        <AnimatePresence
          initial={false}
          exitBeforeEnter
          onExitComplete={() => {
            window.scrollTo(0, 0);
            setOrigin(!origin);
          }}
        >
          <motion.div
            key={router.asPath}
            className="fixed h-[100vh] w-[100vw] bg-theme-primary"
            style={{ zIndex: 1010 }}
            variants={coverVariants}
            initial={'exit_initial'}
            animate="exit_animate"
            exit="exit_exit"
          />
          <motion.div
            key={`${router.asPath}-main`}
            variants={containerVariants}
            exit="fadeOut"
            initial={{ opacity: 1 }}
          >
            <AnimatePresence initial={true}>
              <ClientOnly>
                <QuotationWindowModule />
              </ClientOnly>
              <Component {...pageProps} />
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </ApolloProvider>
    </AppWrapper>
  );
};

export default MyApp;
