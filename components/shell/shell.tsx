import React from "react";
import NavBar from "./navBar";
import SideNav from "./sideNav/SideNav";

export default function Shell({ activePage, setActivePage, children }) {
  return (
    <>
      <div className="hidden h-screen md:grid grid-cols-custom-sidenav-layout">
        <SideNav activePage={activePage} setActivePage={setActivePage} />
        <main>{children}</main>
      </div>
      <div className="md:hidden h-screen">
        <NavBar activePage={activePage} setActivePage={setActivePage} />
        <main>{children}</main>
      </div>
    </>
  );
}
