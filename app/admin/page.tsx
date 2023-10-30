"use client";
import React, { ReactNode, useState } from "react";
import { ROUTES, categories } from "../flow";
import FormNewWord from "./componemts/FormNewWord";
import PinyinKB from "./componemts/PinyinKB";
import Link from "next/link";
import { Category, Word } from "../types";
import Image from "next/image";

const Words: Word[] = [{ zh: "Nihao", fr: "nihao", sw: "jambo", py: "nihao" }];

function AdminPanel() {
  const [wordsList, setwordsList] = useState<Record<string, string> | []>();
  const [selectedWord, setselectedWord] = useState<
    Record<string, string> | {}
  >();
  const [cat, selectedCat] = useState(categories);
  const [editingWord, seteditingWord] = useState(false);

  return (
    <div className="mx-auto max-w-[900px]">
      {/*  <div className="flex flex-col-reverse md:flex-row justify-between p-4 "></div>
      <FormNewWord />}
      <PinyinKB />}
      <div className="flex flex-col md:flex-row justify-between p-4 "></div> */}

      <div className="flex flex-col md:flex-row justify-between p-4 ">
        <details className=" md:w-[30%]" open>
          <summary>Catrgories</summary>

          <div className="   ">
            <div className="pb-4 border-b mb-4">
              <input
                type="text"
                placeholder="Search Cat"
                className="input input-bordered w-full"
              />
            </div>

            <button className="p-4 btn btn-primary mb-4">NEW CATEGORY</button>

            {categories.map((item: Category, i) => (
              <button
                key={i}
                className="p-2 block w-full text-start border rounded-md cursor-pointer mb-2 hover:text-white hover:bg-orange-600 "
              >
                {item.name.fr}
              </button>
            ))}
          </div>
        </details>

        <details className=" md:w-[30%]" open>
          <summary>Words List</summary>
          <div className="  ">
            <div className="pb-4 border-b mb-4">
              <input
                type="text"
                placeholder="Search word"
                className="input input-bordered w-full"
              />
            </div>
            <button
              onClick={(e) => seteditingWord(!editingWord)}
              className="p-4 btn btn-primary mb-4"
            >
              NEW Word
            </button>
            {Words.map((item: Word, i) => (
              <button
                key={i}
                className="p-2 block w-full text-start border rounded-md cursor-pointer mb-2 hover:text-white hover:bg-orange-600 "
              >
                {item.fr}
              </button>
            ))}
          </div>
        </details>

        <details className=" md:w-[30%]" open>
          <summary>Word</summary>

          {!editingWord && (
            <div className="flex items-center flex-col">
              <div className="text-[32pt] font-black bg-gradient-to-r bg-clip-text text-transparent from-purple-500 to-blue-500">
                汉语拼音
              </div>
              <div className=" text-neutral-400 ">Hànyǔ pīnyīn</div>

              <div className="flex gap-4 flex-col mt-4 ">
                <div className="flex gap-4">
                  <div>
                    <Image alt="rdc" src={"/drc.png"} width={30} height={30} />
                  </div>
                  <div>French</div>
                </div>

                <div className="flex gap-4">
                  <div>
                    <Image alt="prc" src={"/prc.png"} width={30} height={30} />
                  </div>
                  <div>French</div>
                </div>
              </div>
            </div>
          )}

          {!editingWord && (
            <div className="flex items-center flex-col">editing</div>
          )}
        </details>
      </div>
    </div>
  );
}

export default AdminPanel;
