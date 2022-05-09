import "../styles/globals.css";
import { AppProps } from "next/app";
import React from "react";
import { AuthProvider } from "../firebase/auth/auth";
import store from "../utils/store";
import { Provider } from "react-redux";

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>
  );
}

export default App;
