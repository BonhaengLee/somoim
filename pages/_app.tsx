import React from 'react';
import MainLayout from './layout/MainLayout';
import NavLayout from './layout/NavLayout';
import '../styles/globals.scss';
import '../styles/reset.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { AuthProvider } from '../lib/auth';
import { ReactQueryProvider } from '../lib/ReactQueryProvider';
import { useQuery, QueryClient } from 'react-query';
import { AppProps } from 'next/dist/shared/lib/router/router';
// import {
//   useQuery,
//   useMutation,
//   useQueryCache,
//   QueryCache,
//   ReactQueryCacheProvider,
// } from 'react-query';
// const queryClient = new QueryCache();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ReactQueryProvider>
        <AuthProvider>
          <MainLayout>
            <NavLayout>
              <Component {...pageProps} />
            </NavLayout>
          </MainLayout>
        </AuthProvider>
      </ReactQueryProvider>
    </>
  );
}

export default MyApp;
