import { ILugaWord } from "@/app/types/types";
import React from "react";
import ShowWord from "../components/ShowWord";
import { sb } from "@/app/db/sb";
import { ILUGA_WORD_DEFAULT } from "@/app/flow";

async function loadWord(id: number) {
  return await sb.from("luga_words").select("*").eq("id", id);
}

async function WordView({ searchParams }: { searchParams: any }) {
  const wd = parseInt(searchParams.wd);
  let { data, error } = await loadWord(wd);
  let word = ILUGA_WORD_DEFAULT;
  if (data?.length === 1) {
    word = data[0];
  }

  console.log("data => ", data);

  return (
    <div className="p-4 w-[900px] mx-auto">
      <div>WordView</div>
      {word && <ShowWord word={word} />}
    </div>
  );
}

export default WordView;
