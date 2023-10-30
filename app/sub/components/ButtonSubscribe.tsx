"use client";
import { ISubItem } from "@/app/types";
import React from "react";

function ButtonSubscribe({ item }: { item: ISubItem }) {
  return (
    <button
      onClick={(e) => alert(item.price)}
      className=" flex-grow border p-2 border-orange-400 text-orange-400 hover:bg-orange-400 mb-4 hover:text-white text-center"
    >
      SELECT
    </button>
  );
}

export default ButtonSubscribe;
