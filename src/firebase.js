import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAzkKMzWJnHeN1XLQIIZf6gOidrnp7kRyE",
  authDomain: "linkedin-clone-yt-774db.firebaseapp.com",
  projectId: "linkedin-clone-yt-774db",
  storageBucket: "linkedin-clone-yt-774db.appspot.com",
  messagingSenderId: "293808406893",
  appId: "1:293808406893:web:ce3e930f47347847931a64"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
