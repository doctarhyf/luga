import React from "react";
import {
  CAT_DEFAULT,
  LANG_DEFAULT,
  ROUTES,
  categories,
  strings,
} from "../flow";
import Link from "next/link";
import Image from "next/image";
import { sb } from "../db/sb";
import { ILugaWord, IWord } from "../types/types";

export const revalidate = 10;

const API_KEY = "https://jsonplaceholder.typicode.com/photos";

/* interface IItem {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
} */

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
  const defaultWord: ILugaWord = {
    id: 2,
    created_at: "2023-11-01T14:00:48.536413+00:00",
    fr: "J'ai besoin d'un tournevis",
    sw: "Niko besoin na tournevis",
    py: "wǒ xūyào yīgè luósīdāo",
    zh: "我需要一个螺丝刀",
    active: true,
  };

  const foundWord = data.find((it) => it.id === selectedWordID);
  const selectedWord = foundWord === undefined ? defaultWord : foundWord; // defaultWord;

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
          Search ...
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

        <div className="flex-1 ">
          <div className="flex items-center flex-col">
            <div className="text-[32pt] font-black bg-gradient-to-r bg-clip-text text-transparent from-purple-500 to-blue-500">
              {
                //汉语拼音
                selectedWord.zh
              }
            </div>
            <div className=" text-neutral-400 ">{selectedWord.py}</div>

            <div className="flex gap-4 flex-col mt-4 ">
              <div className="flex gap-4">
                <div>{selectedWord.fr}</div>
              </div>
              <div className="flex gap-4">
                <div>{selectedWord.sw}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WordsList;
