import firebase from 'firebase';
import firestore from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyB3uTU53_IwleBYM92qQmPbl0IzNulH7dQ",
    authDomain: "ninja-juice.firebaseapp.com",
    databaseURL: "https://ninja-juice.firebaseio.com",
    projectId: "ninja-juice",
    storageBucket: "ninja-juice.appspot.com",
    messagingSenderId: "1078567649978",
    appId: "1:1078567649978:web:538dcfa501f6331f"
};

var defaultProject = firebase.initializeApp(firebaseConfig)

var database = defaultProject.firestore();
export default database