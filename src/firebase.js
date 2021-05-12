import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAwVhKMpdzi5nFU5pSphmMvio8SVJND4-o",
  authDomain: "linkedin-clone-f11bd.firebaseapp.com",
  projectId: "linkedin-clone-f11bd",
  storageBucket: "linkedin-clone-f11bd.appspot.com",
  messagingSenderId: "27019242272",
  appId: "1:27019242272:web:a7d84f432f3c8b1d460545",
  measurementId: "G-1ZHZ7DMD5H",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
