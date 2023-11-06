"use client";
import { sb } from "@/app/db/sb";

import { ILugaWord } from "@/app/types/types";

import React, { useState } from "react";
import FileUploader from "./FileUpload";

function FormNewWord() {
  const [addingNewCat, setaddingNewCat] = useState(false);
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState<ILugaWord>({
    fr: "FR",
    sw: "sw",
    py: "py",
    zh: "zh",
    category: [""],
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
    const { data: res, error } = await sb
      .from("luga_words")
      .insert([data])
      .select();

    //await new Promise((resolve) => setTimeout(resolve, 2000));
    //console.log("cool");

    //if (true) {
    if (error) {
      alert("Error saving word!");
      setloading(false);
      return;
    }

    if (res) {
      alert("Word saved!");
      setloading(false);
    }
  }

  return (
    <>
      <div className="flex">
        <div className="w-[50%]">
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

            {loading && <progress className="progress w-full"></progress>}

            <button
              onClick={(e) => onAddWord()}
              className="btn btn-primary w-fit "
            >
              INSERER
            </button>
          </div>
        </div>

        <div className="w-[50%]  flex gap-4  flex-col ">
          <div className="form-control w-52">
            <label className="cursor-pointer label">
              <span className="label-text">Ajouter une nouvelle categorie</span>
              <input
                onChange={(e) => setaddingNewCat(!addingNewCat)}
                type="checkbox"
                className="toggle toggle-primary"
                checked={addingNewCat}
              />
            </label>
          </div>

          {!addingNewCat && (
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
          )}

          {addingNewCat && (
            <>
              <div>Nouvelle catgorie</div>
              <input
                type="text"
                placeholder="Inserer nouvelle catgorie ..."
                className="input input-bordered w-full max-w-xs"
              />
            </>
          )}
          <FileUploader />
        </div>
      </div>

      <div className="bg-yellow-300 p-4">{JSON.stringify(data)}</div>
    </>
  );
}

export default FormNewWord;
