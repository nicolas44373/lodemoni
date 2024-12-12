import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhQcOxpRa-KCMqsLBMA-cojXCeMKBY3BU",
  authDomain: "lodemoni-5d615.firebaseapp.com",
  projectId: "lodemoni-5d615",
  storageBucket: "lodemoni-5d615.appspot.com",
  messagingSenderId: "107003347477",
  appId: "1:107003347477:web:afe9207fe8825cebbfc41c",
  measurementId: "G-PF1YQ76NJ9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exporta db como exportación por defecto
export default db;
