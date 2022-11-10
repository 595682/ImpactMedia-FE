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
      <Script
        async
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-MH9CQJ17T8"
      ></Script>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MH9CQJ17T8');
      `}
      </Script>
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
