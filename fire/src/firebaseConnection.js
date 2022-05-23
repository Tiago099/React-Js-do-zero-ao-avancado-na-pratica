import firebase from 'firebase/app';
import 'firebase/firestore';

let firebaseConfig = {
    apiKey: "AIzaSyCTBx2dptwdCZkv9Hm_HKggC9rC7aISI74",
    authDomain: "reactapp-9c61a.firebaseapp.com",
    projectId: "reactapp-9c61a",
    storageBucket: "reactapp-9c61a.appspot.com",
    messagingSenderId: "755863720889",
    appId: "1:755863720889:web:6417d4855bba4bd12e1c68",
    measurementId: "G-KL1FCJE02Y"
  };
  
if(!firebase.apps.length){
 firebase.initializeApp(firebaseConfig);
}
export default firebase;