import React from "react";
import { clPage } from "../flow";

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
          <div className="rounded flex flex-col min-h-[240pt] text-center w-full md:max-w-sm p-4  md:w-[30%]  bg-base-100 shadow-xl">
            <div className="flex-grow">
              <div className="text-4xl text-purple-800">{sub.label}</div>
              <div className="  ">{sub.sub}</div>
            </div>

            <div className="my-4 text-orange-500 font-bold text-4xl">
              {sub.price}
            </div>

            <button className=" flex-grow border p-2 border-orange-400 text-orange-400 hover:bg-orange-400 mb-4 hover:text-white text-center">
              SELECT
            </button>

            <div className="text-sm text-neutral-400">{sub.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Subscription;
