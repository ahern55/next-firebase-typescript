import React from "react";
import Auth from "../components/auth";
import { GetServerSidePropsContext } from "next";
import nookies from "nookies";
import { userIsLoggedIn } from "../firebase/auth/utils";

export default function Login() {
  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-cover bg-gradient-to-r from-blue-500 to-blue-800 py-6 sm:py-6">
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
