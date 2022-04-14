import React from "react";
import NavBar from "./navBar/";
export default function Shell({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}
