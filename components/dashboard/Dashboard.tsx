import React, { useState } from "react";
import Shell from "../shell";

export default function Dashboard() {
  return (
    <>
      <Shell>
        <Content />
      </Shell>
    </>
  );
}

type ContentProps = {
  /** the active page to be displayed*/
  activePage: string;
};

const Content = () => (
  <div className="flex flex-col">
    <div className="text-xl font-bold text-gray-600 border-b-2 border-green-200 pt-6 pb-2 px-6">
      NAME
    </div>
    <div className="flex-1 my-6 mx-6 rounded-xl"></div>
  </div>
);
