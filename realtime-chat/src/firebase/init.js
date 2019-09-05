import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCeKk-ig27FMnYi5EpaiU7CqRFYUc7qGwo",
    authDomain: "chatroom-81890.firebaseapp.com",
    databaseURL: "https://chatroom-81890.firebaseio.com",
    projectId: "chatroom-81890",
    storageBucket: "",
    messagingSenderId: "13550560289",
    appId: "1:13550560289:web:f5f4e5a8ccdbd29ed3af60"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

export default db