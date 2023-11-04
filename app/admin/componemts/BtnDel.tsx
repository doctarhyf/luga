"use client";

import { sb } from "@/app/db/sb";
import { useSearchParams } from "next/navigation";
import React from "react";

function BtnDel() {
  const searchParams = useSearchParams();
  const wd = parseInt(searchParams.get("wd") as string) || -1;

  const onDelWord = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (wd != -1) {
      const yes = confirm(`Are you sure you want to delete this word! `);

      if (yes) {
        const { error } = await sb.from("luga_words").delete().eq("id", wd);
        if (error) {
          console.log(error);
          alert("Error!\n" + error.message);
        }
      }
    }
  };

  return (
    <>
      {wd !== -1 && (
        <button onClick={onDelWord} className="btn btn-error">
          Delete {wd}
        </button>
      )}
    </>
  );
}

export default BtnDel;
