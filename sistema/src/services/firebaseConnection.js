import firebase from "firebase/app";
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBdWJLm1T4iU3APo94O7urKV_nC-qfQyNI",
    authDomain: "sistema-f81b7.firebaseapp.com",
    projectId: "sistema-f81b7",
    storageBucket: "sistema-f81b7.appspot.com",
    messagingSenderId: "727492649871",
    appId: "1:727492649871:web:b4d4eb7d39eb34d161a1fa",
    measurementId: "G-GZWYL1N2G0"
  };
  
  if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
  }
  export default firebase;