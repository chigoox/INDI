const fetch = require('node-fetch');

const stripe = require('stripe')(process.env.STRIPE_SECRET_API_KEY, {
  apiVersion: '2020-08-27',
  appInfo: { // For sample support and debugging, not required for production:
    name: "stripe-samples/checkout-one-time-payments",
    version: "0.0.1",
    url: "https://github.com/stripe-samples/checkout-one-time-payments"
  }
});

export const handler = async (req, res) => {


  const request = JSON.parse(req.body)
  const {price, name} = request

  const session = await stripe.checkout.sessions.create({
     line_items: [{
      price_data: {
      currency: 'usd',
      unit_amount: price * 100,
      product_data: {
        name: name,
        description: 'Your massage deposit free',
        images: ['https://plus.unsplash.com/premium_photo-1681873742740-9a0e9eaa4584?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80'],
      },
    },
      quantity: 1,
    }],
    mode: 'payment',
    success_url: `http://indimassage.netlify.app/?success=true`,
    cancel_url: `http://indimassage.netlify.app/?canceled=true`,
  });
  return {
    statusCode: 200,
    body: JSON.stringify({
      url: session.url,
    }),
  }
}