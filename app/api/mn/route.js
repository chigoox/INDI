import { NextResponse } from "next/server";
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


const isDev = () => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return true
    } else {
        return false
    }
}


export async function POST(request) {

    const inDev = isDev()




    const data = await request.json()
    const { price, name, img } = data?.data


    const session = await stripe.checkout.sessions.create({
        line_items: [{
            price_data: {
                currency: 'usd',
                unit_amount: price * 100,
                product_data: {
                    name: name,
                    description: 'Your booking deposit fee',
                    images: [img],
                },
            },
            quantity: 1,
        }],
        mode: 'payment',
        success_url: inDev ? `http://localhost:3000/?successBook=true` : `http://hubbook.vercel.app/?successBook=true`,
        cancel_url: inDev ? `http://localhost:3000/?canceledBook=true` : `http://hubbook.vercel.app/?canceledBook=true`,
    });

    let result = session.url;



    return NextResponse.json({ url: result })



}










