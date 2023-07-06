import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCO7BMc2laBm6ON4Cd3IqU_wvRcCkmJBQk",
  authDomain: "neolocus-49b09.firebaseapp.com",
  projectId: "neolocus-49b09",
  storageBucket: "neolocus-49b09.appspot.com",
  messagingSenderId: "748834702727",
  appId: "1:748834702727:web:b782ce1d07f697b4b93f22",
  measurementId: "G-5C4YPRLN4H"
};

// Check if a Firebase app is already initialized
const app = initializeApp(firebaseConfig);

// Firebase services
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, firestore, storage };
export default app;