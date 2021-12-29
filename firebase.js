import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: 'clone-9beae.firebaseapp.com',
  projectId: 'clone-9beae',
  storageBucket: 'clone-9beae.appspot.com',
  messagingSenderId: '233229242144',
  appId: '1:233229242144:web:633744095f4b92a1801145',
};

let app;

if (app == null) {
  app = initializeApp(firebaseConfig);
} else {
  app = app();
}

export const db = getFirestore();
