import Link from "next/link";
import React from "react";

export default function Splash() {
  return (
    <>
      Splash
      <button>
        <Link href={"/login"}>
          <a>Login</a>
        </Link>
      </button>
    </>
  );
}
