import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import CheckoutProduct from '../components/CheckoutProduct';
import Header from '../components/Header';
import SideOptions from '../components/SideOptions';
import {
  selectItems,
  selectTotalPrice,
  selectTotalQty,
} from '../slices/basketSlice';
import NumberFormat from 'react-number-format';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
  const [openToggle, setOpenToggle] = useState(false);
  const { data: session } = useSession();
  const items = useSelector(selectItems);
  const totalItems = useSelector(selectTotalQty);
  const totalPrice = useSelector(selectTotalPrice);

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    //call the backend to create checkout session
    const checkoutSession = await axios.post('/api/create-checkout-session', {
      items,
      email: session.user.email,
    });

    //redirect user to to stripe checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) alert(result.error.message);
  };

  return (
    <div className='bg-gray-100'>
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

      <main className='lg:flex max-w-screen-2xl mx-auto'>
        <div className='flex-grow m-5 shadow-sm'>
          {/* Left Side */}
          <Image
            src='https://links.papareact.com/ikj'
            alt='advert'
            width={1020}
            height={250}
            objectFit='contain'
          />
          <div className='flex flex-col p-5 space-y-10 bg-white'>
            <h1 className='text-3xl border-b pb-4'>
              {items.length === 0 ? 'Your Basket is empty' : 'Shopping Basket'}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct key={item.id} {...item} />
            ))}
          </div>
        </div>
        <div className='flex flex-col bg-white p-10 shadow-md'>
          {/* Right Side */}
          {items.length > 0 && (
            <>
              <h2 className='whitespace-nowrap'>
                Subtotal ({totalItems}) items:{' '}
                <span className='font-bold'>
                  <NumberFormat
                    value={totalPrice}
                    prefix='€'
                    displayType='text'
                    decimalSeparator='.'
                    decimalScale={2}
                  />
                </span>
              </h2>
              <button
                onClick={createCheckoutSession}
                className={`button mt-2 ${
                  !session &&
                  'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'
                }`}
                role='linknpm '>
                {!session ? 'Sign in to Checkout' : 'Proceed to Checkout'}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
