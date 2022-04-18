import firebase from "../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import React from "react";
import Dashboard from "../components/dashboard";
import Splash from "../components/splash";

export default function index() {
  const [user, loading] = useAuthState(firebase.auth());

  return (
    <div>
      {loading && <h4>Loading...</h4>}
      {!user && <Splash />}
      {user && <Dashboard />}
    </div>
  );
}
