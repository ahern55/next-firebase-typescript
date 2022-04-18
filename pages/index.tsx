import firebase from "../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import React from "react";
import Dashboard from "../components/dashboard";
import Splash from "../components/splash";
import firebaseAdmin from "../firebase/adminApp";
import { GetServerSidePropsContext } from "next";
import nookies from "nookies";

export default function index() {
  const [user, loading] = useAuthState(firebase.auth());

  return (
    <div>
      {loading && <h4>Loading...</h4>}
      {!user && <Splash />}
      {user && <Dashboard />}
    </div>
  );
}

// export async function getServerSideProps(ctx: GetServerSidePropsContext) {
//   try {
//     const cookies = nookies.get(ctx);
//     console.log(cookies);
//     const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);

//     // the user is authenticated!
//     const { uid, email } = token;

//     // FETCH STUFF HERE!! 🚀
//     console.log(uid);
//     return {
//       props: { message: `Your email is ${email} and your UID is ${uid}.` },
//     };
//   } catch (err) {
//     // either the `token` cookie didn't exist
//     // or token verification failed
//     // either way: redirect to the login page
//     ctx.res.end();

//     // `as never` prevents inference issues
//     // with InferGetServerSidePropsType.
//     // The props returned here don't matter because we've
//     // already redirected the user.
//     return { props: {} as never };
//   }
// }
