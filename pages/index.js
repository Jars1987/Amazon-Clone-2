import Head from 'next/head';
import HeaderComponent from '../components/HeaderComponent';
import Banner from '../components/Banner';
import ProductFeed from '../components/ProductFeed';
import Footer from '../components/Footer';
import { useRef } from 'react';

export default function Home({ products }) {
  const topPageRef = useRef(null);

  const scrollToTop = () => {
    topPageRef.current.scrollIntoView({
      behaviour: 'smooth',
      block: 'start',
    });
  };

  return (
    <div ref={topPageRef} className='bg-gray-100'>
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <HeaderComponent />

      <main className='max-w-screen-2xl mx-auto relative'>
        {/* banner */}

        <Banner />

        {/* Product Feed */}
        <ProductFeed products={products} />
      </main>
      <footer>
        <Footer scrollToTop={scrollToTop} />
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch('https://fakestoreapi.com/products').then(res =>
    res.json()
  );

  return {
    props: {
      products,
    },
  };
}
