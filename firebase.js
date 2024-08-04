// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhAmu_QvBf1-aaU3UzIRHTIpPsJl0pPN8",
  authDomain: "inventory-management-2a19b.firebaseapp.com",
  projectId: "inventory-management-2a19b",
  storageBucket: "inventory-management-2a19b.appspot.com",
  messagingSenderId: "461300279603",
  appId: "1:461300279603:web:d50f36e096c08a8c1a7646",
  measurementId: "G-5ZBBQS50P0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}
export {analytics}
