import { initializeApp } from "firebase/app";
import { getAuth, browserLocalPersistence, setPersistence } from "firebase/auth";
import { Firestore, getFirestore, initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDI2um6Fz-tsEujPnbVWkFLaLjaMu_5A-w",
  authDomain: "billing-93db6.firebaseapp.com",
  projectId: "billing-93db6",
  storageBucket: "billing-93db6.firebasestorage.app",
  messagingSenderId: "556281193168",
  appId: "1:556281193168:web:264289f8c14c31ecce74d5",
  measurementId: "G-5X4VB6B969"
};

export const app = initializeApp(firebaseConfig);

// Firestore with offline persistence (falls back to memory cache if it fails)
let _db: Firestore;
try {
  _db = initializeFirestore(app, {
    localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() }),
  }, "billbook");
} catch {
  _db = getFirestore(app, "billbook");
}
export const db: Firestore = _db;

export const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence).catch(() => { });
