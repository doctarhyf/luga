"use client";
import React, { useEffect, useState } from "react";
import { ILugaWord } from "../types/types";
import { useSearchParams } from "next/navigation";
import { sb } from "../db/sb";

function Search() {
  const searchParamas = useSearchParams();

  let lang =
    searchParamas.get("lang") === undefined ? "fr" : searchParamas.get("lang");

  const [words, setwords] = useState<ILugaWord[]>([]);

  useEffect(() => {
    async function loadWords() {
      const data = await sb.from("luga_words").select("*");
      console.log(data);
    }

    loadWords();
  }, []);

  return (
    <div className="p-4">
      <div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-full max-w-xs"
        />{" "}
      </div>
      <div>
        {words.map((curw, i) => (
          <button>{curw.fr}</button>
        ))}
      </div>
    </div>
  );
}

export default Search;
