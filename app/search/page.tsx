"use client";
import React, { useEffect, useState } from "react";
import { ILugaWord } from "../types/types";
import { useSearchParams } from "next/navigation";
import { sb } from "../db/sb";
import Link from "next/link";
import { ROUTES } from "../flow";

export const revalidate = 10;

function Search() {
  const searchParamas = useSearchParams();

  const [loading, setloading] = useState(false);
  const [wordsfiltered, setwordsfiltered] = useState<ILugaWord[]>([]);
  const [words, setwords] = useState<ILugaWord[]>([]);
  const [lang, setlang] = useState("fr");
  const [q, setq] = useState("");

  useEffect(() => {
    setlang(searchParamas.get("lang") || "zh");

    async function loadWords() {
      setloading(true);
      const { data, error } = await sb.from("luga_words").select("*");

      if (error) {
        alert(JSON.stringify(error));
        setloading(false);
        return;
      }

      setloading(false);
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
      <div className="w-full text-center  ">
        <input
          onChange={onSearch}
          value={q}
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-full md:max-w-xs md:mx-auto"
        />{" "}
      </div>

      {loading && (
        <div className="w-full text-center">
          <progress className="progress w-full md:max-w-xs md:mx-auto " />
        </div>
      )}

      <div className="flex flex-col md:justify-center md:items-center md:flex-row  gap-4 md:flex-wrap ">
        {wordsfiltered.map((curw, i) => (
          <Link
            key={i}
            href={`${ROUTES.WORD_VIEW.path}?lang=${lang}&wd=${curw.id}`}
          >
            <div className="p-2 my-2 border rounded-full px-2 cursor-pointer hover:text-orange-500 hover:border-orange-500 md:w-fit ">
              {curw[lang as keyof ILugaWord]}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Search;
