import React from "react";
import {
  CAT_DEFAULT,
  ILUGA_WORD_DEFAULT,
  LANG_DEFAULT,
  ROUTES,
  categories,
} from "../flow";
import Link from "next/link";
import { sb } from "../db/sb";
import { ILugaWord } from "../types/types";
import ShowWord from "./components/ShowWord";

export const revalidate = 10;

const API_KEY = "https://jsonplaceholder.typicode.com/photos";

async function getData() {
  return await sb.from("luga_words").select("*");
}

async function WordsList({ searchParams }: { searchParams: any }) {
  const clp = "mx-auto max-w-[900px]";
  const category = searchParams.cat;
  const { lang, cat, wd } = searchParams;
  const selectedLang: string = lang === undefined ? LANG_DEFAULT.symbol : lang;
  const selectedCat: string = cat === undefined ? CAT_DEFAULT.path : cat;
  const data: ILugaWord[] = (await getData()).data as ILugaWord[];
  const selectedWordID: number = wd === undefined ? 0 : parseInt(wd);

  const foundWord = data.find((it) => it.id === selectedWordID);
  const selectedWord = foundWord === undefined ? ILUGA_WORD_DEFAULT : foundWord; // defaultWord;

  console.log("da sel word => \n", selectedWord);

  if (category === undefined)
    return (
      <div className={`${clp}  py-4 `}>
        <div>Please select a category to continue</div>

        <div className="py-4">
          {categories.map((w, i) => (
            <Link key={i} href={`?cat=${w.path}&lang=${selectedLang}`}>
              <div className=" p-1 px-4 rounded-full my-1 hover:bg-orange-400 hover:text-white border inline-block mx-2 ">
                {" "}
                {w.name.fr}
              </div>
            </Link>
          ))}
        </div>
      </div>
    );

  return (
    <div className={clp}>
      <div className="py-4 text-3xl text-orange-500 border-b ">
        <Link href={".."}>{"<="}</Link>
        {category}
      </div>

      <div className="p-2 mt-2 border rounded-md">
        <Link
          className=" hover:text-orange-500 w-full inline-block"
          href={ROUTES.SEARCH.path}
        >
          Search (words, phrases ...)
        </Link>
      </div>
      <div className="flex p-2  gap-4">
        <div className="flex-2 ">
          <div className=" flex flex-col gap-2 ">
            {data.length === 0 && (
              <>
                <div>No words available!</div>
              </>
            )}

            {data.length > 0 &&
              data.map((currentLugaWord: ILugaWord, i: number) => (
                <Link
                  href={`?cat=${selectedCat}&lang=${selectedLang}&wd=${currentLugaWord.id}`}
                  key={i}
                >
                  <div
                    className={`  ${
                      selectedWordID === currentLugaWord.id
                        ? "bg-orange-500 "
                        : ""
                    } border rounded-md border-transparent hover:border-orange-500 p-1 `}
                  >
                    {currentLugaWord[selectedLang as keyof ILugaWord]}
                  </div>
                </Link>
              ))}
          </div>
        </div>

        <div className="flex-1  ">
          <div className="bg-neutral-300/40 border border-neutral-300  p-4 rounded-md shadow-md ">
            <ShowWord word={selectedWord} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WordsList;
