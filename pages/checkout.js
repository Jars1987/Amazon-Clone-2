import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import CheckoutProduct from '../components/CheckoutProduct';
import HeaderComponent from '../components/HeaderComponent';
import {
  selectItems,
  selectTotalPrice,
  selectTotalQty,
} from '../slices/basketSlice';
import NumberFormat from 'react-number-format';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
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
    <div className={`bg-gray-100 ${items.length === 0 && 'h-screen'}`}>
      <HeaderComponent />

      <main
        className={`${
          items.length > 0 ? 'lg:grid lg:grid-cols-5' : 'flex flex-col'
        } max-w-screen-2xl mx-auto`}>
        <div
          className={`${
            items.length > 0 ? 'lg:col-span-4' : 'flex-grow'
          } m-6 shadow-sm`}>
          <Image
            src='https://links.papareact.com/ikj'
            alt='advert'
            width={1020}
            height={250}
            objectFit='contain'
          />
          <div
            className={`${
              items.length === 0 ? 'mt-14 h-72' : 'mt-4'
            } flex flex-col p-5 space-y-10 bg-white`}>
            {items.length === 0 ? (
              <div className='flex justify-center space-x-10 items-center'>
                <ShoppingCartIcon className='h-40 color-yellow-400' />
                <h1 className='text-3xl'>Your Shopping basket is Empy</h1>
              </div>
            ) : (
              <h1 className='text-3xl border-b pb-4'>Shopping Basket</h1>
            )}

            <TransitionGroup>
              {items.map((item, i) => (
                <CSSTransition
                  key={item.id}
                  timeout={300}
                  classNames='transition'>
                  <CheckoutProduct {...item} />
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>
        </div>

        {items.length > 0 && (
          <>
            <div className='flex  flex-col bg-white p-10 shadow-md'>
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
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default Checkout;
