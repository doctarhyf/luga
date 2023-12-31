import React, { ReactNode, useState } from "react";
import { ROUTES, Words, categories, strings } from "../flow";
import FormNewWord from "./componemts/FormNewWord";
import PinyinKB from "./componemts/PinyinKB";
import Link from "next/link";
import {
  GUI_STATE,
  GuiState,
  ICategory,
  ICountry,
  IWord,
} from "../types/types";
import Image from "next/image";
import { unescape } from "querystring";
import BtnDel from "./componemts/BtnDel";

type propsType = {
  searchParams: any;
};

function AdminPanel({ searchParams }: propsType) {
  console.log(searchParams);

  const { cat, wd, gs, lang } = searchParams; // cat : category; wd: word; gs: guistate
  const selectedCatID: number = cat === undefined ? 0 : parseInt(cat);
  const selectedWordID: number = wd === undefined ? 0 : parseInt(wd);
  const selectedLang: string = lang === undefined ? "fr" : lang;
  const defaultWord: IWord = {
    fr: "Choisir le type de categorie",
    sw: "Choose the words category",
    zh: "汉语拼音",
    py: "Hànyǔ pīnyīn",
  };
  let selectedWord: IWord =
    strings[wd] === undefined ? defaultWord : strings[wd];

  console.log("sw => ", selectedWord);

  const guiState: GuiState =
    gs === undefined ? GUI_STATE.IDLE : (parseInt(gs) as GUI_STATE);

  return (
    <div className="mx-auto max-w-[900px]">
      {/*  <div className="flex flex-col-reverse md:flex-row justify-between p-4 "></div>
      <FormNewWord />}
      <PinyinKB />}
      <div className="flex flex-col md:flex-row justify-between p-4 "></div> */}

      <div className="py-2 border-b  ">
        <div>
          <Link
            className="p-4 btn btn-primary mb-4"
            href={ROUTES.ADD_WORD_OR_CAT.path}
          >
            Add Word or Category
          </Link>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full "
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between p-4 ">
        <details className=" md:w-[30%]">
          <summary>Catrgories</summary>

          <div className="   ">
            <>
              {categories.map((item: ICategory, i) => (
                <Link
                  href={`?cat=${i}&wd=${selectedWordID}`}
                  key={i}
                  className={` ${
                    selectedCatID === i ? "bg-orange-500 text-white" : ""
                  } p-2 block w-full text-start border rounded-md cursor-pointer mb-2 hover:text-white hover:bg-orange-600 `}
                >
                  {item.name.fr}
                </Link>
              ))}
            </>
          </div>
        </details>

        <details className=" md:w-[30%]">
          <summary>
            Words List ({categories[selectedCatID].name[selectedLang]})
          </summary>
          <div className="  ">
            {Words.map((item: IWord, i) => (
              <Link
                href={`?cat=${selectedCatID}&wd=${i}`}
                key={i}
                className="p-2 block w-full text-start border rounded-md cursor-pointer mb-2 hover:text-white hover:bg-orange-600 "
              >
                {item.fr}
              </Link>
            ))}
          </div>
        </details>

        <details className=" md:w-[30%]">
          <summary>Word</summary>

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

            <div className="flex gap-4 flex-col my-4">
              <div>Categories</div>
              <div>
                <div className="badge">default</div>
                <div className="badge badge-neutral">neutral</div>
                <div className="badge badge-primary">primary</div>
                <div className="badge badge-secondary">secondary</div>
                <div className="badge badge-accent">accent</div>
                <div className="badge badge-ghost">ghost</div>
              </div>
            </div>

            <BtnDel />
          </div>
        </details>
      </div>
    </div>
  );
}

export default AdminPanel;
