import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth; 

/* 
const firebaseConfig = {
  apiKey: "AIzaSyBk2Ws5rnTVWiJSiVAxPUbIqonVBA6PZXo",
  authDomain: "genius-car-services-7c698.firebaseapp.com",
  projectId: "genius-car-services-7c698",
  storageBucket: "genius-car-services-7c698.appspot.com",
  messagingSenderId: "374698077240",
  appId: "1:374698077240:web:47d6af626b4728527ecacd"
};

*/