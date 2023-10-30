import React from "react";
import { clPage } from "../flow";
import SubItem from "./components/SubItem";

const SUBS = [
  {
    label: "12 MONTHS",
    sub: "Only $2.99 per month",
    oldPrice: "",
    price: "$35.99",
    note: "one-time payment, non-recurring",
  },
  {
    label: "2 YEARS",
    sub: "Only $2.49 per month",
    oldPrice: "",
    price: "$59.99",
    note: "one-time payment, non-recurring",
  },
  {
    label: "LIFETINE",
    sub: "Only $2.99 per month",
    oldPrice: "$129",
    price: "$119",
    note: "one-time payment",
  },
];

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
