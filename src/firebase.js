import firebase from 'firebase/app';
import "firebase/auth"; 
import "firebase/database"; 
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyAelQYNmrYhVIrLp2LqyiahYlTpxCr2SEA",
  authDomain: "chat-react-8c783.firebaseapp.com",
  databaseURL: "https://chat-react-8c783.firebaseio.com",
  projectId: "chat-react-8c783",
  storageBucket: "chat-react-8c783.appspot.com",
  messagingSenderId: "516255739321",
  appId: "1:516255739321:web:98827392af431ba62d9a68",
  measurementId: "G-9J1BFPFKBD"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
