import firebase from "firebase"
var firebaseConfig = {
    apiKey: "AIzaSyD2bEpWJ_pneX86REZpUgQRIYVNydJ2UKA",
    authDomain: "whatsclone-8a6de.firebaseapp.com",
    databaseURL: "https://whatsclone-8a6de.firebaseio.com",
    projectId: "whatsclone-8a6de",
    storageBucket: "whatsclone-8a6de.appspot.com",
    messagingSenderId: "353493844719",
    appId: "1:353493844719:web:d7df45d4ae56bbbb91911a",
    measurementId: "G-T13J5M8E7K"
  };
const firebaseapp=firebase.initializeApp(firebaseConfig)
const db=firebaseapp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
export {auth,provider}
export default db;