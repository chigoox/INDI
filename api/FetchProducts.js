const fetch = require('node-fetch');

const stripe = require('stripe')(process.env.STRIPE_SECRET_API_KEY, {
  apiVersion: '2020-08-27',
  appInfo: { // For sample support and debugging, not required for production:
    name: "stripe-samples/checkout-one-time-payments",
    version: "0.0.1",
    url: "https://github.com/stripe-samples/checkout-one-time-payments"
  }
});
export const handler = async () => {
  const products = await stripe.products.list()
  return {
    statusCode: 200,
    body: JSON.stringify({
      products: products.data,
    }),
  }
}