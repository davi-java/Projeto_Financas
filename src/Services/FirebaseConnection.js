import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyBblrz7hqha6AO4odolZBc2TnW2Bt3nByQ",
    authDomain: "myapp-b2516.firebaseapp.com",
    databaseURL: "https://myapp-b2516-default-rtdb.firebaseio.com",
    projectId: "myapp-b2516",
    storageBucket: "myapp-b2516.appspot.com",
    messagingSenderId: "807849994455",
    appId: "1:807849994455:web:e769f4047ecd982f116892",
    measurementId: "G-Y6G0J84E16"
};

if (!firebase.apps.length) {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}

export default firebase;

