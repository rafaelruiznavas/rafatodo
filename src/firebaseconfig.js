import {initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDNyQzcmQqzmz4SYLKrqaTRvU48zugGEDI",
  authDomain: "rafatodo-af9e8.firebaseapp.com",
  projectId: "rafatodo-af9e8",
  storageBucket: "rafatodo-af9e8.appspot.com",
  messagingSenderId: "745327367814",
  appId: "1:745327367814:web:357c3a5856135065422307"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)

export { db }
