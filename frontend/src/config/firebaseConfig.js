import firebase from "firebase/app";
import { environment } from "./envConfig";

const firebaseConfig = {
  apiKey: environment.firebase_apiKey,
  authDomain: environment.firebase_authDomain,
  projectId: environment.firebase_projectId,
  storageBucket: environment.firebase_storageBucket,
  messagingSenderId: environment.firebase_messagingSenderId,
  appId: environment.firebase_appId,
  measurementId: environment.firebase_measurementId,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
