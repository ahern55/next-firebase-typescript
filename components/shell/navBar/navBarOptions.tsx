import React from "react";
import Svg from "../../svg";
import firebase from "../../../firebase/clientApp";

export default function NavBarOptions({
  activePage,
  setActivePage,
  mobile = false,
}) {
  return (
    <>
      <NavItem
        activePage={activePage}
        link="#dashboard"
        svgIcon={<Svg.ChartPieSvg />}
        title="Dashboard"
        setActivePage={setActivePage}
      />
      <NavItem
        activePage={activePage}
        link="#users"
        svgIcon={<Svg.UsersSvg />}
        title="Users"
        setActivePage={setActivePage}
      />
      <NavItem
        activePage={activePage}
        link="#users"
        svgIcon={<Svg.UsersSvg />}
        title="Messages"
        setActivePage={setActivePage}
      />
      {mobile && (
        <>
          <NavItem
            activePage={activePage}
            link="#users"
            svgIcon={<Svg.CogSvg />}
            title="Settings"
            setActivePage={setActivePage}
          />
          <NavItem
            activePage={activePage}
            link="#users"
            svgIcon={<Svg.SignOutSvg />}
            title="Sign Out"
            // hacky :)
            setActivePage={signOut}
          />
        </>
      )}
    </>
  );
}

const NavItem = ({ activePage, link, svgIcon, title, setActivePage }) => (
  <a
    onClick={() => setActivePage(title)}
    href={link}
    className={`flex items-center no-underline text-green-50 hover:text-green-100 p-3 rounded-md ${
      activePage === title ? "bg-blue-800" : ""
    }`}
  >
    {svgIcon}
    <div className="font-bold pl-3">{title}</div>
  </a>
);

const signOut = async (ignore: any) => {
  firebase.auth().signOut();
};
