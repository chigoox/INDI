import { sendEmail } from "@/app/apiCalls/Email";
import { NextResponse } from "next/server";
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);



export async function GET(request) {
    const endpointSecret = process.env.STRIPE_WEBOOK_KEY
    const sig = request.headers['stripe-signature'];

    let event;

    try {
        event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
    } catch (err) {
        return NextResponse.json(`Webhook Error: ${err.message}`);
        return;
    }

    // Handle the event
    switch (event.type) {
        case 'checkout.session.completed':
            const checkoutSessionCompleted = event.data.object;

            console.log(checkoutSessionCompleted)
            sendEmail('dikeemmanuel54@gamil.com', 'test', { name: "emmauel", phone: 9082202312, email: 'dikeemmanuel54@gmail.com' }, 'new')






            // Then define and call a function to handle the event checkout.session.completed
            break;
        // ... handle other event types
        default:
            console.log(`Unhandled event type ${event.type}`);
    }



    return NextResponse.json({ status: 202 })



}










