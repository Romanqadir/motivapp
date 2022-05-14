
import { initializeApp } from "firebase/app";


import { getFirestore } from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: "AIzaSyAUpyzl5mVPJ5a3n-kUb9PAwBEbo70ITv8",
  authDomain: "fir-v9-13c72.firebaseapp.com",
  projectId: "fir-v9-13c72",
  storageBucket: "fir-v9-13c72.appspot.com",
  messagingSenderId: "351056440132",
  appId: "1:351056440132:web:32874158563e34c2d94511"
};


const app = initializeApp(firebaseConfig);


export const db=getFirestore(app);