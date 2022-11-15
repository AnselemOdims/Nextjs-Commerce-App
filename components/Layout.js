import Head from 'next/head';

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + '- Shopper' : 'Shopper'}</title>
        <meta name="description" content="Shopper App" />
        <link rel="icon" href="/favicon.ico" />
        <header>This is the header</header>
        <main>{children}</main>
        <footer>This is the footer</footer>
      </Head>
    </>
  );
};

export default Layout;
