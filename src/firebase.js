import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "abc-company-51e89.firebaseapp.com",
  projectId: "abc-company-51e89",
  storageBucket: "abc-company-51e89.appspot.com",
  messagingSenderId: "963615196354",
  appId: "1:963615196354:web:dc2b439717cc7b3d61675b",
  measurementId: "G-B3FGTYZ98Z",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export const storage = getStorage(app);

export { auth, db };
