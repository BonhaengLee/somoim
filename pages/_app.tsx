import { AppProps } from 'next/dist/next-server/lib/router/router';
import React from 'react';
import { ReactQueryDevtools } from 'react-query-devtools';
import MainLayout from './layout/MainLayout';
import NavLayout from './layout/NavLayout';
import '../styles/globals.scss';
import '../styles/reset.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainLayout>
        <NavLayout>
          <Component {...pageProps} />
        </NavLayout>
      </MainLayout>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default MyApp;
