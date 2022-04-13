import "../styles/global.css";
import { UserProvider } from "@auth0/nextjs-auth0";
import Shell from "../components/shell/";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Shell>
        <Component {...pageProps} />;
      </Shell>
    </UserProvider>
  );
}

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCx3AMyKgODCTxDFgDqbUXXj5MICM_MtRA",
  authDomain: "habits-tracking.firebaseapp.com",
  projectId: "habits-tracking",
  storageBucket: "habits-tracking.appspot.com",
  messagingSenderId: "771015543746",
  appId: "1:771015543746:web:7a77bf4e17514bc66ea45b",
  measurementId: "G-R3DNHK8NE0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
