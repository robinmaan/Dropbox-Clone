import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import {getFunctions} from "firebase/functions"
import {getStorage} from "firebase/storage"
import {getApp , getApps,initializeApp} from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyBMJ1MDXgtjd3SXk7EHSLR8f6pxmPFU9zI",
    authDomain: "dropbox-clone-54485.firebaseapp.com",
    projectId: "dropbox-clone-54485",
    storageBucket: "dropbox-clone-54485.appspot.com",
    messagingSenderId: "731390533860",
    appId: "1:731390533860:web:94136e85203f9388a6ccf1"
  };

  const app = getApps().length ? getApp() :initializeApp(firebaseConfig)
  const db = getFirestore(app)
 
  const stronge = getStorage(app)
  export{db , stronge}