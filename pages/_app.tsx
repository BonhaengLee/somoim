import { AppProps } from 'next/dist/next-server/lib/router/router';
import NavLayout from '../components/templates/layout/NavLayout';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavLayout>
      <Component {...pageProps} />
    </NavLayout>
  );
}

export default MyApp;
