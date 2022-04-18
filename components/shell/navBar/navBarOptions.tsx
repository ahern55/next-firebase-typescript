import React from "react";
import Svg from "../../svg";
import firebase from "../../../firebase/clientApp";

type Props = {
  activePage: string;
  /** callback to set the active page */
  setActivePage: (arg0: string) => void;
  /** Whether the navbar options are appearing on a small screen, or a collapsed navbar */
  smallScreen?: boolean;
};

export default function NavBarOptions({
  activePage,
  setActivePage,
  smallScreen = false,
}: Props) {
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
      {smallScreen && (
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

type NavItemProps = {
  activePage: string;
  link: string;
  /** callback to set the active page */
  setActivePage: (arg0: string) => void;
  svgIcon: JSX.Element;
  title: string;
};

const NavItem = ({
  activePage,
  link,
  svgIcon,
  title,
  setActivePage,
}: NavItemProps) => (
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

const signOut = async () => {
  firebase.auth().signOut();
};
