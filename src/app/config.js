import { initializeApp } from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCD-K9-UleNcEQjDOcIQNrkxz9ZpdlsbWQ",
    authDomain: "signin-98c1b.firebaseapp.com",
    projectId: "signin-98c1b",
    storageBucket: "signin-98c1b.appspot.com",
    messagingSenderId: "273555392494",
    appId: "1:273555392494:web:ed22f537f4bcb183fc70ff",
    measurementId: "G-NWWEXPMSHR"
};


const app = initializeApp(firebaseConfig);

export default app;