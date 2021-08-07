import MainLayout from '../components/templates/layout/MainLayout';
import NavLayout from '../components/templates/layout/NavLayout';
import '../styles/globals.scss';
import '../styles/reset.css';

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || NavLayout; //DefaultLayout;

  return (
    <MainLayout>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MainLayout>
  );
}

export default MyApp;
