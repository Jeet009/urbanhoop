import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTDKxSk727lsjZg_rgjF4kQjPvkm4F3KM",
  authDomain: "urbanhoop-eb5ee.firebaseapp.com",
  projectId: "urbanhoop-eb5ee",
  storageBucket: "urbanhoop-eb5ee.appspot.com",
  messagingSenderId: "747126498305",
  appId: "1:747126498305:web:c1afc661e8e3b1d7a44c00",
  measurementId: "G-7BWPP1EFHT",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
// const firestoreTimestamp = firebase.firestore.FieldValue.serverTimestamp();

export { auth };
