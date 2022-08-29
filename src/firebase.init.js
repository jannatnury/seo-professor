import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBd5cGuOG0fRNiy1p9jPN3teLqhVewMqyw",
  authDomain: "seo-professor-7c703.firebaseapp.com",
  projectId: "seo-professor-7c703",
  storageBucket: "seo-professor-7c703.appspot.com",
  messagingSenderId: "208057498024",
  appId: "1:208057498024:web:0bb64f9ae360024097c59d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;