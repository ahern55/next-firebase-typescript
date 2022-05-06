import React from "react";
import Svg from "../../svg/";
import NavBarOptions from "../navBar/NavBarOptions";
import Link from "next/link";
import { signOut } from "../../../utils/genericUtils";
import LogoSvg from "../../../images/svg/logo.svg";

export default function SideNav() {
  return (
    <div className="flex flex-col bg-gray-800 text-green-50 px-6 py-4">
      <SidenavHeader />
      <SidenavMenu />
      <SidenavFooter />
    </div>
  );
}

const SidenavHeader = () => (
  <div className="flex items-center ml-1 pb-8">
    <LogoSvg width="2.5rem" height="2.5rem" />
    <Link href="/">
      <a className="text-xl font-bold pl-3 no-underline text-blue-50 hover:text-blue-100">
        My App
      </a>
    </Link>
  </div>
);

const SidenavMenu = () => (
  <nav className="space-y-2">
    <NavBarOptions smallScreen={false} />
  </nav>
);

const SidenavFooter = () => (
  <>
    <Link href="/settings">
      <a className="flex items-end mt-auto px-1 no-underline text-blue-50 opacity-70 hover:opacity-100">
        <Svg.CogSvg />
        <div className="pl-2">Settings</div>
      </a>
    </Link>
    <a
      href=""
      className="flex items-center mt-3 px-1 no-underline text-blue-50 opacity-70 hover:opacity-100"
      onClick={signOut}
    >
      <Svg.SignOutSvg />
      <div className="pl-2">Sign Out</div>
    </a>
  </>
);
