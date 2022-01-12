import Head from 'next/head';
import HeaderComponent from '../components/HeaderComponent';
import Banner from '../components/Banner';
import ProductFeed from '../components/ProductFeed';
import Footer from '../components/Footer';
import { useRef } from 'react';
import 'react-notifications/lib/notifications.css';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';

export default function Home({ products }) {
  const topPageRef = useRef(null);

  const createNotification = productName => {
    return NotificationManager.success(
      `${productName} was added to your basket!`,
      'Added to Basket',
      2000
    );
  };

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
        <ProductFeed
          products={products}
          createNotification={createNotification}
        />
      </main>
      <footer>
        <Footer scrollToTop={scrollToTop} />
      </footer>
      <NotificationContainer />
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
