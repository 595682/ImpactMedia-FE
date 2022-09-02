import '../styles/global.css';

import { ApolloProvider } from '@apollo/client';
import { AnimatePresence, motion } from 'framer-motion';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';

import { AppWrapper } from '@/lib/context/state';
import client from '@/lib/gql/client';
import QuotationWindowModule from '@/modules/QuotationWindow';
import ClientOnly from '@/common/components/ClientOnly';

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
