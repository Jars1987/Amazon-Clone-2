const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items, email } = req.body;

  const transformedItems = items.map(item => ({
    price_data: {
      currency: 'eur',
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        images: [item.image],
      },
    },
    description: item.description,
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    shipping_rates: ['shr_1KCAWcB2r2B7E1Fr5eBJlb3k'],
    shipping_address_collection: {
      allowed_countries: ['US', 'GB', 'CA', 'PT'],
    },
    line_items: transformedItems,
    mode: 'payment',
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map(item => item.image)),
      names: JSON.stringify(items.map(item => item.title)),
      productIds: JSON.stringify(items.map(item => item.id)),
    },
  });

  res.status(200).json({ id: session.id });
};
