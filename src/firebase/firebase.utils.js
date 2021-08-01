import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: 'AIzaSyCu-72-DArdae4laXcDJYUKvUOT4p6WM5k',
  authDomain: 'crwn-db-6df4f.firebaseapp.com',
  projectId: 'crwn-db-6df4f',
  storageBucket: 'crwn-db-6df4f.appspot.com',
  messagingSenderId: '854997601856',
  appId: '1:854997601856:web:fc71423fafa9ca8ecc99a5',
  measurementId: 'G-4SLN1Z8C3F',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
