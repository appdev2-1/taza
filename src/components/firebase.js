// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmFR4Ia0uHBjqFCfU9rVKI2xy3uoZQC0g",
    authDomain: "netchill-f6cc7.firebaseapp.com",
    databaseURL: "https://netchill-f6cc7-default-rtdb.firebaseio.com",
    projectId: "netchill-f6cc7",
    storageBucket: "netchill-f6cc7.appspot.com",
    messagingSenderId: "733120212012",
    appId: "1:733120212012:web:6dcdfb04342025ffc03589",
    measurementId: "G-9RKJDE2NHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app); // Initialize Firebase Storage

export { storage };
