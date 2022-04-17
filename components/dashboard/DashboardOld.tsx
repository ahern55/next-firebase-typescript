import React from "react";
import firebase from "../../firebase/clientApp";
import { useCollection } from "react-firebase-hooks/firestore";
import VoterList from "../VoterList";
import { useAuthState } from "react-firebase-hooks/auth";
import SideNav from "../shell/sideNav/SideNav";

// Firestore
const db = firebase.firestore();

type VoteDocument = {
  vote: string;
};

export default function Dashboard() {
  const [user, loading, error] = useAuthState(firebase.auth());

  // Votes Collection
  const [votes, votesLoading, votesError] = useCollection(
    firebase.firestore().collection("votes"),
    {}
  );

  // Create document function
  const addVoteDocument = async (vote: string) => {
    await db.collection("votes").doc(user.uid).set({
      vote,
    });
  };

  const signOut = async () => {
    firebase.auth().signOut();
  };

  return (
    <>
      <button onClick={signOut}>Sign Out</button>
      <h1>Pineapple on Pizza?</h1>

      <div style={{ flexDirection: "row", display: "flex" }}>
        <button
          style={{ fontSize: 32, marginRight: 8 }}
          onClick={() => addVoteDocument("yes")}
        >
          ✔️🍍🍕
        </button>
        <h3>
          Pineapple Lovers:{" "}
          {
            votes?.docs?.filter(
              (doc) => (doc.data() as VoteDocument).vote === "yes"
            ).length
          }
        </h3>
      </div>
      <div style={{ flexDirection: "row", display: "flex" }}>
        <button
          style={{ fontSize: 32, marginRight: 8 }}
          onClick={() => addVoteDocument("no")}
        >
          ❌🍍🍕
        </button>
        <h3>
          Pineapple Haters:{" "}
          {
            votes?.docs?.filter(
              (doc) => (doc.data() as VoteDocument).vote === "no"
            ).length
          }
        </h3>
      </div>
      <div style={{ marginTop: "64px" }}>
        <h3>Voters:</h3>
        <div
          style={{
            maxHeight: "320px",
            overflowY: "auto",
            width: "240px",
          }}
        >
          {votes?.docs?.map((doc) => (
            <>
              <VoterList id={doc.id} key={doc.id} vote={doc.data().vote} />
            </>
          ))}
        </div>
      </div>
    </>
  );
}
