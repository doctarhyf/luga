import { sb } from "@/app/db/sb";
import { ILUGA_WORD_DEFAULT } from "@/app/flow";
import { ILugaWord } from "@/app/types/types";
import React from "react";

async function ShowWord({ word }: { word: ILugaWord }) {
  const selectedWord = word;

  return (
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

      <div className="stat w-32 ">
        <div className="stat-figure text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Total Likes</div>
        <div className="stat-value text-primary">
          {
            //25.6K
            0
          }
        </div>
        <div className="stat-desc">21% more than last month</div>
      </div>
    </div>
  );
}

export default ShowWord;
