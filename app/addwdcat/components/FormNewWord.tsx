"use client";
import { sb } from "@/app/db/sb";

import { ILugaWord } from "@/app/types/types";

import React, { useState } from "react";

function FormNewWord() {
  const [addingNewCat, setaddingNewCat] = useState(false);
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState<ILugaWord>({
    fr: "FR",
    sw: "sw",
    py: "py",
    zh: "zh",
  });

  function onDataChange(e: React.ChangeEvent<HTMLInputElement>) {
    const v = e.target.value;
    const k = e.target.name;

    setdata((old) => ({ ...old, [k]: v }));

    console.log("da data => \n", data);
  }

  async function onAddWord() {
    //alert(JSON.stringify(data));
    setloading(true);
    /* const { data: res, error } = await sb
      .from("luga_words")
      .insert([data])
      .select(); */

    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("cool");

    if (true) {
      //(error) {
      alert("Error saving word!");
      setloading(false);
      return;
    }

    /* if  (res) {
      alert("Word saved!");
      setloading(false);
    } */
  }

  return (
    <div>
      <div className="flex flex-col gap-4 mb-4">
        <input
          name="zh"
          type="text"
          placeholder="中文"
          className="input input-bordered w-full max-w-xs"
          onChange={onDataChange}
          value={data?.zh}
        />
        <input
          name="py"
          type="text"
          placeholder="Pinyin"
          className="input input-bordered w-full max-w-xs"
          onChange={onDataChange}
          value={data?.py}
        />
        <input
          name="fr"
          type="text"
          placeholder="Francais"
          className="input input-bordered w-full max-w-xs"
          onChange={onDataChange}
          value={data?.fr}
        />
        <input
          name="sw"
          type="text"
          placeholder="Swahili"
          className="input input-bordered w-full max-w-xs"
          onChange={onDataChange}
          value={data?.sw}
        />

        <div className="form-control w-52">
          <label className="cursor-pointer label">
            <span className="label-text">Add New Category</span>
            <input
              onChange={(e) => setaddingNewCat(!addingNewCat)}
              type="checkbox"
              className="toggle toggle-primary"
              checked={addingNewCat}
            />
          </label>
        </div>

        {!addingNewCat && (
          <select className="select select-primary w-full max-w-xs">
            <option disabled selected>
              What is the best TV show?
            </option>
            <option>Game of Thrones</option>
            <option>Lost</option>
            <option>Breaking Bad</option>
            <option>Walking Dead</option>
          </select>
        )}

        {addingNewCat && (
          <>
            <div>Category</div>
            <input
              type="text"
              placeholder="Swahili"
              className="input input-bordered w-full max-w-xs"
            />
          </>
        )}

        {loading && <progress className="progress w-full"></progress>}

        <button onClick={(e) => onAddWord()} className="btn btn-primary w-fit ">
          INSERER
        </button>
      </div>
    </div>
  );
}

export default FormNewWord;
