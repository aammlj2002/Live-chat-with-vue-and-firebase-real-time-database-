import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDpbWdeJrSJ-MiwB8qhMvBdWish3Au_0P4",
    authDomain: "vue-blog-system-a9a5c.firebaseapp.com",
    projectId: "vue-blog-system-a9a5c",
    storageBucket: "vue-blog-system-a9a5c.appspot.com",
    messagingSenderId: "737500569553",
    appId: "1:737500569553:web:d82f2aaae923dfc7688af0"
};
firebase.initializeApp(firebaseConfig);

let db=firebase.firestore();
let auth=firebase.auth();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {db, auth, timestamp}