import React from "react";
import firebase from "../../../firebase/clientApp";
import Svg from "../../svg/";
import NavBarOptions from "../navBar/navBarOptions";

export default function SideNav({ activePage, setActivePage }) {
  return (
    <div className="flex flex-col bg-gray-800 text-green-50 px-6 py-4">
      <SidenavHeader />
      <SidenavMenu activePage={activePage} setActivePage={setActivePage} />
      <SidenavFooter />
    </div>
  );
}

const SidenavHeader = () => (
  <div className="flex items-center ml-1 pb-8">
    <Svg.FireSvg />
    <a
      href="#home"
      className="text-xl font-bold pl-1 no-underline text-green-50 hover:text-green-100"
    >
      bored.io
    </a>
  </div>
);

const SidenavMenu = ({ activePage, setActivePage }) => (
  <nav className="space-y-2">
    <NavBarOptions activePage={activePage} setActivePage={setActivePage} />
  </nav>
);

const SidenavFooter = () => (
  <>
    <a
      href="#settings"
      className="flex items-end mt-auto px-1 no-underline text-green-50 opacity-70 hover:opacity-100"
    >
      <Svg.CogSvg />
      <div className="pl-2">Settings</div>
    </a>
    <a
      href="#settings"
      className="flex items-center mt-3 px-1 no-underline text-green-50 opacity-70 hover:opacity-100"
      onClick={signOut}
    >
      <Svg.SignOutSvg />
      <div className="pl-2">Sign Out</div>
    </a>
  </>
);

const signOut = async () => {
  firebase.auth().signOut();
};
