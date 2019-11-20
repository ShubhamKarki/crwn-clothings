import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAjFBLokM1g4V4BHe90EPhY8G49FTFlNc8",
    authDomain: "crwn-db-686fc.firebaseapp.com",
    databaseURL: "https://crwn-db-686fc.firebaseio.com",
    projectId: "crwn-db-686fc",
    storageBucket: "crwn-db-686fc.appspot.com",
    messagingSenderId: "396283934429",
    appId: "1:396283934429:web:ceeb8aa2a2abf346e78d34",
    measurementId: "G-1PKFDD40FM"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;