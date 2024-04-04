// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYgxCxrLcZevVDPCXUS-fRwQDqcAzf3TQ",
  authDomain: "auth-moha-milon-9955a.firebaseapp.com",
  projectId: "auth-moha-milon-9955a",
  storageBucket: "auth-moha-milon-9955a.appspot.com",
  messagingSenderId: "45293756102",
  appId: "1:45293756102:web:9448116a0bb222040301c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;