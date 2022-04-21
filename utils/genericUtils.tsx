import Router from "next/router";
import firebase from "../firebase/clientApp";

export const signOut = async () => {
  await firebase.auth().signOut();
  Router.push("/");
};
