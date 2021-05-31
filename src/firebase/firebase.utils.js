import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBWxVV8goK0AgfIDhqTlDVkhKV3YPJ8fMw",
  authDomain: "crown-db-7c80f.firebaseapp.com",
  projectId: "crown-db-7c80f",
  storageBucket: "crown-db-7c80f.appspot.com",
  messagingSenderId: "101810155807",
  appId: "1:101810155807:web:19eeddc75be262cdfe402a",
  measurementId: "G-YF5BG0D4JV",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase