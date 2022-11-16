import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + '- Shopper' : 'Shopper'}</title>
        <meta name="description" content="Shopper App" />
        <link rel="icon" href="/favicon.ico" />
        <div className="flex min-h-screen flex-col justify-between">
          <Header />
          <main className="container m-auto mt-4 px-10">{children}</main>
          <Footer/>
        </div>
      </Head>
    </>
  );
};

export default Layout;
