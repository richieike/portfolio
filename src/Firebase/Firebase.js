import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//passing config settings from project in firebase
const config = {

    apiKey: "AIzaSyCrm8hRrp0yOg-ghlJ5UOvVPeiR-Y8q5O0",
    authDomain: "richardikeportfolio.firebaseapp.com",
    databaseURL: "https://richardikeportfolio.firebaseio.com",
    projectId: "richardikeportfolio",
    storageBucket: "richardikeportfolio.appspot.com",
    messagingSenderId: "54827659221",
    appId: "1:54827659221:web:a64e1dfe7ce1726a"
    
};
//init app with config passed
firebase.initializeApp(config);
firebase.firestore();

export default firebase;