import app from "firebase/app"
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAQRE5i_xLmaE1XYX72X2EJbf_IRQ6ZaAo",
  authDomain: "brunipaz-2944b.firebaseapp.com",
  projectId: "brunipaz-2944b",
  storageBucket: "brunipaz-2944b.firebasestorage.app",
  messagingSenderId: "5307727860",
  appId: "1:5307727860:web:f5703b32c4f5ae6ca803a1"
};

app.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const db = app.firestore()