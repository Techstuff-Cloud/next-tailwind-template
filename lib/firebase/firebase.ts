import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBGQtJhay0wno9JSTm4ZPHrY6wq2c_mfWg',
  authDomain: 'my-sandbox-250210.firebaseapp.com',
  databaseURL: 'https://my-sandbox-250210.firebaseio.com',
  projectId: 'my-sandbox-250210',
  storageBucket: 'my-sandbox-250210.appspot.com',
  messagingSenderId: '859711185648',
  appId: '1:859711185648:web:7c7e42002c600847bc1835',
  measurementId: 'G-Q2YSZETHPD',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
