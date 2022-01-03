import moment from 'moment';
import { getSession, useSession } from 'next-auth/react';
import { db } from '../firebase';
import HeaderComponent from '../components/HeaderComponent';
import Order from '../components/Order';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';

function Orders({ orders }) {
  const { data: session } = useSession();

  return (
    <div>
      <HeaderComponent />

      <main className='max-w-screen-lg mx-auto p-10'>
        <h1 className='text-3xl border-b mb-2 pb-1 border-yellow-400'>
          Your Orders
        </h1>
        {session ? (
          <h2>
            {orders?.length} {orders.length === 1 ? ' order' : 'orders'}
          </h2>
        ) : (
          <h2>Please sign in to see your orders</h2>
        )}

        <div className='mt-5 space-y-4'>
          {orders?.map(
            ({
              id,
              amount,
              amountShipping,
              items,
              timestamp,
              images,
              names,
              productIds,
            }) => (
              <Order
                key={id}
                id={id}
                amount={amount}
                amountShipping={amountShipping}
                items={items}
                timestamp={timestamp}
                images={images}
                names={names}
                productIds={productIds}
              />
            )
          )}
        </div>
      </main>
    </div>
  );
}

export default Orders;

export async function getServerSideProps(context) {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

  // Get Logged in user session credentials
  const session = await getSession(context);

  if (!session)
    return {
      props: {},
    };

  const q = query(
    collection(db, 'users', session.user.email, 'orders'),
    orderBy('timestamp', 'desc')
  );
  const stripeOrders = await getDocs(q);

  const orders = await Promise.all(
    stripeOrders.docs.map(async order => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      images: order.data().images,
      names: order.data().names,
      productIds: order.data().productIds,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, { limit: 100 })
      ).data,
    }))
  );

  return {
    props: {
      orders,
    },
  };
}
