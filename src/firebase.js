import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyC8Yn1ifG019Ip4Us7hugoAO5zEqU59EdE",
    authDomain: "tiktok-clone-597ec.firebaseapp.com",
    projectId: "tiktok-clone-597ec",
    storageBucket: "tiktok-clone-597ec.appspot.com",
    messagingSenderId: "932393869932",
    appId: "1:932393869932:web:897238037b626140cd2e49",
    measurementId: "G-8KKC2KX1TC"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db =getFirestore(app)
