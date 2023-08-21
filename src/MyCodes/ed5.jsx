
import { collection, doc, setDoc, getDocs, getDoc, updateDoc, arrayUnion, arrayRemove, deleteField } from "firebase/firestore";
import { DATABASE } from '../../Firebase'
import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Toastify from 'toastify-js'


export const notify = (notification, duration = 5000) => {
    Toastify({
        text: notification,
        duration: duration,
        className: "bg-red-900 border-gray-700 border bg-black-800",
        // destination: "https://github.com/apvarun/toastify-js",
        // newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, black, #121212)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
};

export const isDev = () => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return true
    } else {
        return false
    }
}
export function handleInput5(key, value, stateSetter) {
    //const key = target.name
    // const value = target.value


    try {
        stateSetter((old) => {
            return { ...old, [key]: value }
        })
    } catch {
        if (!stateSetter) {
            console.log('need stateSetter')
        }
    }

}




export async function addToDatabase(collection, Doc, field, data) {


    await setDoc(doc(DATABASE, collection, Doc), {
        [field]: data,
    }, { merge: true });

}

export async function updateDatabaseItem(collection, Doc, Field, Value) {
    await updateDoc(doc(DATABASE, collection, Doc), {
        [Field]: Value ? Value : deleteField()
    });
}

export async function updateArrayDatabaseItem(collection, Doc, Field, Value) {
    await updateDoc(doc(DATABASE, collection, Doc), {
        [Field]: arrayUnion(Value)
    });
}







export const getRand = (max) => { return Math.floor(Math.random() * max) + 1; }


export function disableScroll(enable = true, name = "scroll-able") {
    if (enable) document.querySelector(`.${name}`).classList.add('disablScroll');
    if (!enable) document.querySelector(`.${name}`).classList.remove('disablScroll');
    console.log(enable)
}


async function fetchDocument(collection, document, setterfunction) {
    const docRef = doc(DATABASE, collection, document);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        setterfunction(docSnap.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}




export { fetchDocument }