import firebaseAdmin from "../adminApp";

export const userIsLoggedIn = async (cookies: any) => {
  try {
    await firebaseAdmin.auth().verifyIdToken(cookies.token);
    return true;
  } catch (error) {
    return false;
  }
};
