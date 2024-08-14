import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAFJ0zBFSFOPoylTjpZDbKYu8543yay7m0",
  authDomain: "farmer-social-networking-site.firebaseapp.com",
  projectId: "farmer-social-networking-site",
  storageBucket: "farmer-social-networking-site.appspot.com",
  messagingSenderId: "342841359669",
  appId: "1:342841359669:web:a5f9b3f13e0c09c5aca07c"
  // apiKey: "AIzaSyAULN0jvUM4XDICM0Q6goeOttkd-ciI6ao",
  // authDomain: "social-76cf4.firebaseapp.com",
  // projectId: "social-76cf4",
  // storageBucket: "social-76cf4.appspot.com",
  // messagingSenderId: "1043694769107",
  // appId: "1:1043694769107:web:b430f2d79db23982a8d526"
};
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
