
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnpriJRgDYmtS16olZZJc8X09MF0hrf7k",
  authDomain: "helian04-04.firebaseapp.com",
  databaseURL: "https://helian04-04-default-rtdb.firebaseio.com",
  projectId: "helian04-04",
  storageBucket: "helian04-04.firebasestorage.app",
  messagingSenderId: "94127016740",
  appId: "1:94127016740:web:c8534ca3439bdbab97c1b1",
  measurementId: "G-WGP4KJRZ9Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };
