import React from "react";
import Shell from "../components/shell";

export default function Users() {
  return (
    <Shell
      activePage="users"
      setActivePage={(test: string) => console.log(test)}
    >
      <>eee</>
    </Shell>
  );
}
