import { useSession } from 'next-auth/react';
import Head from 'next/head';
import { useState } from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import ProductFeed from '../components/ProductFeed';
import SideOptions from '../components/SideOptions';

export default function Home({ products }) {
  const [openToggle, setOpenToggle] = useState(false);
  const { data: session } = useSession();

  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      {openToggle && (
        <>
          <div className='absolute z-40 w-full h-full bg-black opacity-50' />
          <SideOptions
            userName={session.user.name}
            handleToggle={() => setOpenToggle(!openToggle)}
          />
        </>
      )}
      <Header handleToggle={() => setOpenToggle(!openToggle)} />

      <main className='max-w-screen-2xl mx-auto relative'>
        {/* banner */}

        <Banner />

        {/* Product Feed */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

// https://fajestoreapi.com/products
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
