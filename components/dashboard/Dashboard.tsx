import React, { useState } from "react";
import Shell from "../shell";

export default function Dashboard() {
  const [activePage, setActivePage] = useState("Dashboard");
  return (
    <>
      <Shell activePage={activePage} setActivePage={setActivePage}>
        <Content activePage={activePage} />
      </Shell>
    </>
  );
}

type ContentProps = {
  /** the active page to be displayed*/
  activePage: string;
};

const Content = ({ activePage }: ContentProps) => (
  <div className="flex flex-col">
    <div className="text-xl font-bold text-gray-600 border-b-2 border-green-200 pt-6 pb-2 px-6">
      {activePage}
    </div>
    <div className="flex-1 my-6 mx-6 rounded-xl"></div>
  </div>
);
