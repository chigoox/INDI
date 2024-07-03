import { NextResponse } from "next/server";
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);



export async function POST(request) {

    const isDev = () => {
        if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
            return true
        } else {
            return false
        }
    }

    const inDev = isDev()




    const data = await request.json()
    const { price, name, img, addons, userName, userEmail, userPhone, bundled, appointment, uid } = data
    console.log(uid)

    const session = await stripe.checkout.sessions.create({
        line_items: [{
            price_data: {
                currency: 'usd',
                unit_amount: price * 100,
                product_data: {
                    name: 'Massage',
                    description: 'Your booking deposit fee',
                    images: [img],
                },
            },
            quantity: 1,
        }],
        mode: 'payment',
        success_url: inDev ? `http://localhost:3000/?successBook=true` : `https://indimassage.com/?successBook=true`,
        cancel_url: inDev ? `http://localhost:3000/?canceledBook=true` : `https://indimassage.comq/?canceledBook=true`,
        metadata: {
            name: name,
            price: price.toString(),
            email: userEmail.toString(),
            name: userName.toString(),
            phone: userPhone.toString(),
            bundled: bundled.toString(),
            addons: JSON.stringify(addons),
            appointment: appointment.toString(),
            uid: uid.toString(),

        },
    });

    let result = session.url;



    return NextResponse.json({ url: result })



}










