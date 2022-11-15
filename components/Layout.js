import Head from 'next/head';
import Header from './Header';

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + '- Shopper' : 'Shopper'}</title>
        <meta name="description" content="Shopper App" />
        <link rel="icon" href="/favicon.ico" />
        <div className="flex min-h-screen flex-col justify-between">
          <Header />
          <main className="container m-auto mt-4 px-4">{children}</main>
          <footer className="flex justify-center items-center h-10 shadow-inner">This is the footer</footer>
        </div>
      </Head>
    </>
  );
};

export default Layout;
