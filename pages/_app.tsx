import React from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import Theme from '../src/components/Theme/Theme';
import GlobalStyle from '../src/components/Styles/gloablstyles';
/// <reference types="styled-components/cssprop" />
import '../styles.scss';
import Layout from '../src/components/Layout/Layout';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import { store } from '@/store/store';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Theme>
        <Provider store={store}>
          <GlobalStyle />
          <Layout>
            <Head>
              <title>Next | Zmall</title>
            </Head>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Theme>
    </SessionProvider>
  );
};

export default MyApp;
