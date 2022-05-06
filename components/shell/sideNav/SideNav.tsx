import React, { createContext, useContext } from "react";
import Svg from "../../svg/";
import NavBarOptions from "../navBar/NavBarOptions";
import Link from "next/link";
import { signOut } from "../../../utils/genericUtils";
import LogoSvg from "../../../images/svg/logo.svg";
import { useAppDispatch, useAppSelector } from "../../../utils/hooks";
import { toggle, selectSideNavExpanded } from "./sideNavSlice";

const ExpandedContext = createContext(true);

export default function SideNav() {
  const expanded = useAppSelector(selectSideNavExpanded);

  return (
    <ExpandedContext.Provider value={expanded}>
      <div className="flex flex-col bg-gray-800 text-green-50 px-6 py-4">
        <SideNavHeader />
        <SideNavMenu />
        <SideNavFooter />
      </div>
    </ExpandedContext.Provider>
  );
}

const SideNavHeader = () => {
  const expanded = useContext(ExpandedContext);

  return (
    <div className="flex items-center ml-2 pb-8">
      <Link href="/">
        <a className="text-xl font-bold no-underline text-blue-50 hover:text-blue-100">
          <LogoSvg width="2.5rem" height="2.5rem" className="inline" />
          {expanded && <div className="inline ml-2">My App</div>}
        </a>
      </Link>
    </div>
  );
};

const SideNavMenu = () => {
  const expanded = useContext(ExpandedContext);

  return (
    <nav className="space-y-2">
      <NavBarOptions smallScreen={false} expanded={expanded} />
    </nav>
  );
};

const SideNavFooter = () => {
  const dispatch = useAppDispatch();
  const expanded = useContext(ExpandedContext);
  return (
    <>
      <Link href="/settings">
        <a className="flex ml-1 items-end mt-auto px-1 no-underline text-blue-50 opacity-70 hover:opacity-100">
          <Svg.CogSvg />
          {expanded && <div className="pl-2">Settings</div>}
        </a>
      </Link>
      <a
        href=""
        className="flex ml-1 items-center mt-3 px-1 no-underline text-blue-50 opacity-70 hover:opacity-100"
        onClick={signOut}
      >
        <Svg.SignOutSvg />
        {expanded && <div className="pl-2">Sign Out</div>}
      </a>
      <div className="flex justify-end">
        <button
          onClick={() => {
            dispatch(toggle());
          }}
        >
          {expanded ? "<" : ">"}
        </button>
      </div>
    </>
  );
};
