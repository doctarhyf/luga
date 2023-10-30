"use client";
import { useRouter } from "next/router";
import React from "react";
import { ROUTES } from "../flow";
import Link from "next/link";

function ButtonStart() {
  return (
    <div className="btn btn-secondary  ">
      <Link href={ROUTES.LANG.path}>Access all graded reading lessons</Link>
    </div>
  );
}

export default ButtonStart;
