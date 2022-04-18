import React from "react";
import Auth from "../../components/auth";
import Router from "next/router";
import firebase from "../../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";

export default function login() {
  const [user] = useAuthState(firebase.auth());

  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-cover bg-gradient-to-r from-blue-500 to-blue-800 py-6 sm:py-6">
        <Auth />
      </div>
    </>
  );
}
