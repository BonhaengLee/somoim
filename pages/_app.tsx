import React from 'react';
import 'react-quill/dist/quill.snow.css';
import { AppProps } from 'next/dist/shared/lib/router/router';
import MainLayout from './layout/MainLayout';
import '../styles/globals.scss';
import '../styles/reset.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import { AuthProvider } from '../lib/auth';
import { ReactQueryProvider } from '../lib/ReactQueryProvider';
import DefaultLayout from './layout/DefaultLayout';

function MyApp({ Component, pageProps }: any) {
  // @ts-8ignore
  // console.log(Component.Layout);
  const Layout = Component.Layout || DefaultLayout;

  return (
    <>
      <ReactQueryProvider>
        <AuthProvider>
          <MainLayout>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </MainLayout>
        </AuthProvider>
      </ReactQueryProvider>
    </>
  );
}

export default MyApp;
