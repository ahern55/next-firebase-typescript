import React from "react";
import Auth from "../components/auth";
import { GetServerSidePropsContext } from "next";
import nookies from "nookies";
import { userIsLoggedIn } from "../firebase/auth/utils";
import LogoSvg from "../images/svg/logo.svg";

export default function Login() {
  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-center text-center overflow-hidden bg-cover bg-gradient-to-tr from-blue-300 to-indigo-800 py-6 sm:py-6">
        <div className="flex justify-center text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl pb-5">
          <LogoSvg width="2.5rem" height="2.5rem" />
          <div className="pl-2">My App</div>
        </div>
        <Auth />
      </div>
    </>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const cookies = nookies.get(ctx);
  const authenticated = await userIsLoggedIn(cookies);

  if (authenticated) {
    ctx.res.writeHead(302, { Location: "/" });
    ctx.res.end();
  }

  return {
    props: {},
  };
}
