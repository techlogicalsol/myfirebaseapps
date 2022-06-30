import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTG0C2TNtjKi5V8VIWc8DgIuZs7tHY9yI",
    authDomain: "instashare-fd311.firebaseapp.com",
    projectId: "instashare-fd311",
    storageBucket: "instashare-fd311.appspot.com",
    messagingSenderId: "330656481785",
    appId: "1:330656481785:web:bcfb95b382e6cce8497d28"
  };
  
  // Initialize Firebase
  //const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };