import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDDJFq662oX2O7l2Y_p36FcSU96R1nxHUY',
  authDomain: 'fir-v9-guide.firebaseapp.com',
  projectId: 'fir-v9-guide',
  storageBucket: 'fir-v9-guide.appspot.com',
  messagingSenderId: '1057838534170',
  appId: '1:1057838534170:web:e2871d7fcdd2c5da9ccba3',
  measurementId: 'G-XMLPHTH4LY',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
