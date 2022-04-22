import React from "react";
import Dashboard from "../components/dashboard";
import Splash from "../components/splash";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import nookies from "nookies";
import { userIsLoggedIn } from "../firebase/auth/utils";

export default function index(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <div>
      {!props.authenticated && <Splash />}
      {props.authenticated && <Dashboard />}
    </div>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const cookies = nookies.get(ctx);
  const authenticated = await userIsLoggedIn(cookies);
  return {
    props: { authenticated },
  };
}
