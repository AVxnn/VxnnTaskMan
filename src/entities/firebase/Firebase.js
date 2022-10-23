
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgAxyx2GcCenjavu2tQdkzAv7bfIahAGM",
  authDomain: "taskman-7de0c.firebaseapp.com",
  projectId: "taskman-7de0c",
  storageBucket: "taskman-7de0c.appspot.com",
  messagingSenderId: "1081247842873",
  appId: "1:1081247842873:web:1415e166fbbd9c567303e8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {db, auth, app}