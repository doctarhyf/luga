"use client";
import React, { ReactNode, useState } from "react";
import { ROUTES, categories } from "../flow";
import FormNewWord from "./componemts/FormNewWord";
import PinyinKB from "./componemts/PinyinKB";
import Link from "next/link";
import { Category, Word } from "../types";
import Image from "next/image";

const Words: Word[] = [{ zh: "Nihao", fr: "nihao", sw: "jambo", py: "nihao" }];

const enum GUI_STATE {
  IDLE = 0,
  EDITING_WORD,
  EDITING_CATEGORY,
}

function AdminPanel() {
  const [wordsList, setwordsList] = useState<Record<string, string> | []>();
  const [selectedWord, setselectedWord] = useState<
    Record<string, string> | {}
  >();
  const [cat, selectedCat] = useState(categories);
  //const [editingWord, seteditingWord] = useState(false);
  const [loading, setloading] = useState(true);
  const [guimode, setguimode] = useState(GUI_STATE.IDLE);

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

            {guimode !== GUI_STATE.EDITING_CATEGORY && (
              <>
                <button
                  onClick={(e) => setguimode(GUI_STATE.EDITING_CATEGORY)}
                  className="p-4 btn btn-primary mb-4"
                >
                  NEW CATEGORY
                </button>
                {categories.map((item: Category, i) => (
                  <button
                    key={i}
                    className="p-2 block w-full text-start border rounded-md cursor-pointer mb-2 hover:text-white hover:bg-orange-600 "
                  >
                    {item.name.fr}
                  </button>
                ))}{" "}
              </>
            )}

            {guimode === GUI_STATE.EDITING_CATEGORY && (
              <>
                <div className="flex items-center flex-col">
                  <div className="pb-4 ">
                    <input
                      type="text"
                      placeholder="Search word"
                      className="input input-bordered w-full"
                    />
                  </div>
                </div>
                <div>
                  <button className="btn btn-primary">SAVE</button>
                  <button
                    onClick={(e) => setguimode(GUI_STATE.IDLE)}
                    className="btn btn-warning"
                  >
                    Cancel
                  </button>
                </div>{" "}
                {loading && (
                  <progress className="progress w-56 progress-error"></progress>
                )}
              </>
            )}
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
            {guimode === GUI_STATE.IDLE && (
              <button
                onClick={(e) => setguimode(GUI_STATE.EDITING_WORD)}
                className="p-4 btn btn-primary mb-4"
              >
                NEW Word
              </button>
            )}
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

          {guimode !== GUI_STATE.EDITING_WORD && (
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

          {guimode === GUI_STATE.EDITING_WORD && (
            <>
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Category
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>

              <div className="flex items-center flex-col">
                <div className="pb-4 ">
                  <input
                    type="text"
                    placeholder="Search word"
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="pb-4 ">
                  <input
                    type="text"
                    placeholder="Search word"
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="pb-4 ">
                  <input
                    type="text"
                    placeholder="Search word"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>

              <div>
                <button className="btn btn-primary">SAVE</button>
                <button
                  onClick={(e) => setguimode(GUI_STATE.IDLE)}
                  className="btn btn-warning"
                >
                  Cancel
                </button>
              </div>

              {loading && (
                <progress className="progress w-56 progress-error"></progress>
              )}
            </>
          )}
        </details>
      </div>
    </div>
  );
}

export default AdminPanel;
