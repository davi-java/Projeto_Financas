import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyCu3pqfbYK4Eay-T_8mdEnnfcOrANm217c",
    authDomain: "mysnackbar-5b80a.firebaseapp.com",
    databaseURL: "https://mysnackbar-5b80a-default-rtdb.firebaseio.com",
    projectId: "mysnackbar-5b80a",
    storageBucket: "mysnackbar-5b80a.appspot.com",
    messagingSenderId: "203204197484",
    appId: "1:203204197484:web:cb1aa11c97bb00824b6c49",
    measurementId: "G-CJKGD5G4WC"
  };

if (!firebase.apps.length) {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}

export default firebase;

