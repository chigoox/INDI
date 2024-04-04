import Stripe from 'stripe';

//updates


export default async function POST(request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  let data = await request.body;
  let { price, name } = data
  console.log(price, name)
  const session = await stripe.checkout.sessions.create({
    line_items: [{
      price_data: {
        currency: 'usd',
        unit_amount: price * 100,
        product_data: {
          name: name,
          description: 'Your massage deposit fee',
          images: ['https://plus.unsplash.com/premium_photo-1681873742740-9a0e9eaa4584?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80'],
        },
      },
      quantity: 1,
    }],
    mode: 'payment',
    success_url: `http://indimassage.com/?successBook=true`,
    cancel_url: `http://indimassage.com/?canceledBook=true`,
  });

  console.log("hello worldjknkjnjknkjnkjnkjnkjnkjnkjnjkn")
  return new Response(session.url);
}






/* export const handler = async (req, res) => {


  const request = JSON.parse(req.body)
  const { price, name } = request

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
    success_url: `http://indimassage.netlify.app/?successBook=true`,
    cancel_url: `http://indimassage.netlify.app/?canceledBook=true`,
  });
  return {
    statusCode: 200,
    body: JSON.stringify({
      url: session.url,
      session: session,
    }),
  }
} */