import { AppProps } from 'next/dist/next-server/lib/router/router';
import React from 'react';
import MainLayout from '../components/templates/layout/MainLayout';
import NavLayout from '../components/templates/layout/NavLayout';
import '../styles/globals.scss';
import '../styles/reset.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <NavLayout>
        <Component {...pageProps} />
      </NavLayout>
    </MainLayout>
  );
}

export default MyApp;
