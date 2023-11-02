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
      const { data, error } = await sb.from("luga_words").select("*");

      if (error) {
        alert(JSON.stringify(error));
        return;
      }

      setwords(data);
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
          <button>{curw[lang as keyof ILugaWord]}</button>
        ))}
      </div>
    </div>
  );
}

export default Search;
