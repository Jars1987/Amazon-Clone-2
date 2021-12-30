import { buffer } from 'micro';
const {
  initializeApp,
  applicationDefault,
  cert,
} = require('firebase-admin/app');
const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require('firebase-admin/firestore');

//Connect to firebase
const serviceAccount = require('../../permissions.json');

let app;

if (app == null) {
  app = initializeApp({
    credential: cert(serviceAccount),
  });
} else {
  app = app();
}

const db = getFirestore();

//Connect to Stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// key to listen for events
const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

//function to add the info returned form stripe in to firebase DB
const fulfillOrder = async session => {
  return db
    .collection('users')
    .doc(session.metadata.email)
    .collection('orders')
    .doc(session.id)
    .set({
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
      images: JSNON.parse(session.metadata.images),
      timestamp: FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log(`Success: Order ${session.id} has been added to the DB.`);
    })
    .catch(e => {
      console.log(`Error adding to db: ${e.message}`);
    });
};

export default async (req, res) => {
  if (req.method === 'POST') {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers['stripe-signature'];

    let event;

    //verify event that came from Stripe
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (e) {
      console.error('Error on Event listener: ', e.message);
      return res.status(400).send(`Webhook event error: ${e.message}`);
    }

    // Handle checkoutSession completed event
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;

      //fulfill the order
      return fulfillOrder(session)
        .then(() => res.status(200))
        .catch(e => {
          console.log(`Webhook fulfillOrder error: ${e.message}`);
          return res
            .status(400)
            .send(`Webhook fulfillOrder error: ${e.message}`);
        });
    }
  }
};

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
    externalResolver: true,
  },
};
