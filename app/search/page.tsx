"use client";
import React, { useEffect, useState } from "react";
import { ILugaWord } from "../types/types";
import { useSearchParams } from "next/navigation";
import { sb } from "../db/sb";

export const revalidate = 10;

function Search() {
  const searchParamas = useSearchParams();

  const [wordsfiltered, setwordsfiltered] = useState<ILugaWord[]>([]);
  const [words, setwords] = useState<ILugaWord[]>([]);
  const [lang, setlang] = useState("fr");
  const [q, setq] = useState("");

  useEffect(() => {
    setlang(searchParamas.get("lang") || "zh");

    async function loadWords() {
      const { data, error } = await sb.from("luga_words").select("*");

      if (error) {
        alert(JSON.stringify(error));
        return;
      }

      setwords(data);
      setwordsfiltered(data);

      console.log("loaded data => \n", data);
    }

    loadWords();
  }, []);

  function onSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const v = e.target.value.toLowerCase();
    setq(v);

    setwordsfiltered(
      words.filter((it, i) => {
        const d = it[lang as keyof ILugaWord] as string;
        return d.includes(v);
      })
    );
  }

  return (
    <div className="p-4">
      <div>
        <input
          onChange={onSearch}
          value={q}
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-full max-w-xs"
        />{" "}
      </div>

      <div className="flex flex-col md:flex-row  gap-4 md:flex-wrap ">
        {wordsfiltered.map((curw, i) => (
          <div className="p-1 my-2 border rounded-full px-2 cursor-pointer hover:text-orange-500 hover:border-orange-500 md:w-fit ">
            {curw[lang as keyof ILugaWord]}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
