import React from "react";
import Svg from "../../svg";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut } from "../../../utils/genericUtils";

type Props = {
  /** Whether the navbar options are appearing on a small screen, or a collapsed navbar */
  smallScreen?: boolean;
};

export default function NavBarOptions({ smallScreen = false }: Props) {
  return (
    <>
      <NavItem link="/" svgIcon={<Svg.ChartPieSvg />} title="Dashboard" />
      <NavItem link="/users" svgIcon={<Svg.UsersSvg />} title="Users" />
      <NavItem link="/messages" svgIcon={<Svg.UsersSvg />} title="Messages" />
      {smallScreen && (
        <>
          <NavItem link="/settings" svgIcon={<Svg.CogSvg />} title="Settings" />
          <a
            onClick={signOut}
            className="flex items-center no-underline text-blue-50 hover:text-blue-100 p-3 rounded-md"
          >
            {<Svg.SignOutSvg />}
            <div className="font-bold pl-3">Sign Out</div>
          </a>
        </>
      )}
    </>
  );
}

type NavItemProps = {
  link: string;
  svgIcon: JSX.Element;
  title: string;
};

const NavItem = ({ link, svgIcon, title }: NavItemProps) => {
  const router = useRouter();
  return (
    <Link href={link}>
      <a
        className={`flex items-center no-underline text-blue-50 hover:text-blue-100 p-3 rounded-md ${
          isActivePage(link, router.pathname) ? "bg-indigo-800" : ""
        }`}
      >
        {svgIcon}
        <div className="font-bold pl-3">{title}</div>
      </a>
    </Link>
  );
};

const isActivePage = (link: string, pathName: string) => {
  return pathName.toLowerCase() === link.toLowerCase();
};
