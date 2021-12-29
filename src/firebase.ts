// import "firebase/auth";
// import "firebase/firestore";
// import "firebase/storage";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { firebaseConfig } from './env';

const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const db = getFirestore(firebase);

// onAuthStateChanged(auth, user => { console.log(user); });

// export const storage = firebase.storage();
// export const functions = firebase.functions();
// export const firebaseTimestamp = firebase.firestore.Timestamp;
