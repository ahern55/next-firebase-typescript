import "../styles/globals.css";
import { AppProps } from "next/app";
import React from "react";
import { AuthProvider } from "../firebase/auth/auth";

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default App;
