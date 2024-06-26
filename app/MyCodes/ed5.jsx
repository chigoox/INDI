
import { message } from "antd";
import { addDoc, arrayUnion, collection, deleteField, doc, getDoc, getDocs, limit, orderBy, query, setDoc, updateDoc } from "firebase/firestore";
import { DATABASE } from '../../Firebase';


export const notify = (notification, duration = 5) => {
    message.info(notification, duration)
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


export const removeItemFromArry = (array) => {
    const index = array.indexOf(2);
    return array.splice(index, 1);
}

export async function addDocument(collection, _doc, data) {
    await setDoc(doc(DATABASE, collection, _doc), data, { merge: true });
}

export async function addToDatabase(collection, Doc, field, data) {


    await setDoc(doc(DATABASE, collection, Doc), {
        [field]: data,
    }, { merge: true });

}


export const fetchInOrder = async (datacollection, orderby, _limit) => {
    const ref = collection(DATABASE, datacollection)
    const qry = _limit ? query(ref, orderBy(orderby, 'desc'), limit(_limit)) : query(ref, orderBy(orderby, 'desc'))
    const snapShot = await getDocs(qry)

    let data = []
    snapShot.forEach((doc) => {
        data = [...data, doc.data()]
    });

    return data

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



//random number and text of size n
export function getRandTN(size = 7) {
    const result = Math.random().toString(36).substring(2, size < 7 ? 7 : size);
    return result;

}



export const getRand = (max) => { return Math.floor(Math.random() * max) + 1; }


export function disableScroll(enable = true, name = "scroll-able") {
    if (enable) document.querySelector(`.${name}`).classList.add('disablScroll');
    if (!enable) document.querySelector(`.${name}`).classList.remove('disablScroll');
    console.log(enable)
}


async function fetchDocument(collection, document, setterfunction) {
    const docRef = doc(DATABASE, collection, document ? document : null);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        if (setterfunction) setterfunction(docSnap.data());
        return docSnap.data()
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}




export { fetchDocument };
