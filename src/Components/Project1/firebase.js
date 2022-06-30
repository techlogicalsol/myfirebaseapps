import firebase from 'firebase/compat/app';
import "firebase/compat/database"

const firebaseConfig = {
    apiKey: "AIzaSyBpz_JEyZJhrOeVD0Ti0H8qE5YbpfXniII",
    authDomain: "contact-manager-bcdff.firebaseapp.com",
    projectId: "contact-manager-bcdff",
    storageBucket: "contact-manager-bcdff.appspot.com",
    messagingSenderId: "270313955300",
    appId: "1:270313955300:web:e6b7ca192988f0c97ef1f1"
  };

const fireDb = firebase.initializeApp(firebaseConfig)
export default fireDb.database().ref();