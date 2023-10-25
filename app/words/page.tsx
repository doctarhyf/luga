"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

function WordsList() {
  const searchParams = useSearchParams();
  const category = searchParams.get("cat");

  return <div>WordsList {category} - </div>;
}

export default WordsList;
