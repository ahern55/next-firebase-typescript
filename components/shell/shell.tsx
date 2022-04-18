import React from "react";
import NavBar from "./navBar";
import SideNav from "./sideNav/SideNav";

type Props = {
  activePage: string;
  /** callback to set the active page */
  setActivePage: (arg0: string) => void;
  children: JSX.Element;
};

export default function Shell({ activePage, setActivePage, children }: Props) {
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
