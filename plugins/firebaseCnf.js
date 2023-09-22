// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NUXT_ENV_APIKEY,
  authDomain: process.env.NUXT_ENV_AUTHDOMAIN,
  databaseURL: process.env.NUXT_ENV_DATABASEURL,
  projectId: process.env.NUXT_ENV_PROJECTID,
  storageBucket: process.env.NUXT_ENV_STORAGEBUCKET,
  messagingSenderId: process.env.NUXT_ENV_MESSAGINGSENDERID,
  appId: process.env.NUXT_ENV_APPID,
  measurementId: process.env.NUXT_ENV_MEASUREMENTID
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);