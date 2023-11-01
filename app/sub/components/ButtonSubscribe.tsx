"use client";
import { ISubItem } from "@/app/types/types";
import Link from "next/link";
import React from "react";

function ButtonSubscribe({ item }: { item: ISubItem }) {
  return (
    <Link
      href={`?subplan=${item.id}`}
      className=" flex-grow border p-2 border-orange-400 text-orange-400 hover:bg-orange-400 mb-4 hover:text-white text-center"
    >
      SELECT
    </Link>
  );
}

export default ButtonSubscribe;
