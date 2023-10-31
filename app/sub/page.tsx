import React from "react";
import { SUBS, clPage } from "../flow";
import SubItem from "./components/SubItem";

function Subscription() {
  return (
    <div className="">
      <div className="bg-purple-800 p-8 justify-center items-center md:flex-row flex-col flex gap-8 ">
        {SUBS.map((sub, i) => (
          <SubItem key={i} item={sub} />
        ))}
      </div>
    </div>
  );
}

export default Subscription;
