// import "firebase/auth";
// import "firebase/firestore";
// import "firebase/storage";
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const firebaseApp = initializeApp({ /* config */ });
const auth = getAuth();
onAuthStateChanged(auth, user => { console.log(user); });


export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
export const functions = firebase.functions();
// export const firebaseTimestamp = firebase.firestore.Timestamp;
