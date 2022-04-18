import React from "react";
import Svg from "../../svg";
import firebase from "../../../firebase/clientApp";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  /** Whether the navbar options are appearing on a small screen, or a collapsed navbar */
  smallScreen?: boolean;
};

export default function NavBarOptions({ smallScreen = false }: Props) {
  return (
    <>
      <NavItem link="/" svgIcon={<Svg.ChartPieSvg />} title="Dashboard" />
      <NavItem link="/users" svgIcon={<Svg.UsersSvg />} title="Users" />
      <NavItem link="#users" svgIcon={<Svg.UsersSvg />} title="Messages" />
      {smallScreen && (
        <>
          <NavItem link="#users" svgIcon={<Svg.CogSvg />} title="Settings" />
          <NavItem
            link="#users"
            svgIcon={<Svg.SignOutSvg />}
            title="Sign Out"
          />
        </>
      )}
    </>
  );
}

type NavItemProps = {
  link: string;
  /** callback to set the active page */
  svgIcon: JSX.Element;
  title: string;
};

const NavItem = ({ link, svgIcon, title }: NavItemProps) => {
  const router = useRouter();
  return (
    <Link href={link}>
      <a
        className={`flex items-center no-underline text-green-50 hover:text-green-100 p-3 rounded-md ${
          isActivePage(title, router.pathname) ? "bg-blue-800" : ""
        }`}
      >
        {svgIcon}
        <div className="font-bold pl-3">{title}</div>
      </a>
    </Link>
  );
};

const isActivePage = (title: string, pathName: string) => {
  console.log(pathName.toLowerCase().replace("/", ""));
  return pathName.toLowerCase().replace("/", "") === title.toLowerCase();
};

const signOut = async () => {
  firebase.auth().signOut();
};
