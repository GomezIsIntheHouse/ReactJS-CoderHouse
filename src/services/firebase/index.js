import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBZPnUn7owaTOCYuBTgROZt-SBuAQBTWU8",
    authDomain: "app-ecommerce-5dffb.firebaseapp.com",
    projectId: "app-ecommerce-5dffb",
    storageBucket: "app-ecommerce-5dffb.appspot.com",
    messagingSenderId: "888409407336",
    appId: "1:888409407336:web:90c1742632fd2ebab560dd",
    measurementId: "G-C7ZB792D1T"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
