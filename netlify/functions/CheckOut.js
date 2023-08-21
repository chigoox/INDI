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
  console.log(req.body)

  console.log(req.body['cart'])

  const request = JSON.parse(req.body)
  const {cart} = request
  console.log(cart)

  const session = await stripe.checkout.sessions.create({
    line_items: [cart],
    mode: 'payment',
    success_url: cart.price == 'price_1Nenu0BiXRHCNCMjv2LpBOct' ? `https://voidappx.netlify.app?successBook=true` : `https://voidappx.netlify.app?success=true`,
    cancel_url: cart.price == 'price_1Nenu0BiXRHCNCMjv2LpBOct' ? `https://voidappx.netlify.app?canceledBook=true` : `https://voidappx.netlify.app?canceled=true`,
  });
  return {
    statusCode: 200,
    body: JSON.stringify({
      url: session.url,
    }),
  }
}