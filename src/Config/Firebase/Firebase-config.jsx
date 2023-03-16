import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore/lite'
const firebaseConfig = {
  apiKey: "AIzaSyC8vFZhWtcdwQfZ_P--ycWnKYueyErZhtg",
  authDomain: "nvisiondentallab.firebaseapp.com",
  projectId: "nvisiondentallab",
  storageBucket: "nvisiondentallab.appspot.com",
  messagingSenderId: "730189154",
  appId: "1:730189154:web:09ef122fc981796772f03b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };