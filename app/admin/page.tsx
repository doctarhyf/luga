"use client";

import React, { useState } from "react";
import { categories } from "../flow";

const pinyins = [
  "ā ē ī ō ū ǖ Ā Ē Ī Ō Ū Ǖ",
  "á é í ó ú ǘ Á É Í Ó Ú Ǘ",
  "ǎ ě ǐ ǒ ǔ ǚ Ǎ Ě Ǐ Ǒ Ǔ Ǚ",
  "à è ì ò ù ǜ À È Ì Ò Ù Ǜ",
  "a e i o u ü A E I O U Ü",
];

function FormNewWord() {
  const [shownewcat, setshownewcat] = useState(false);
  const [worddata, setworddata] = useState({
    cat: "Category",
    zh: "chinois",
    fr: "french",
    sw: "swahili",
    py: "pinyin",
  }); //cool

  function onSaveNewWord(e: any) {
    e;
    console.log(worddata);
  }

  function onChangeWordCat(e: any) {
    let newcat = e.target.value;

    setworddata((old) => ({ ...old, cat: e.target.value }));
    setshownewcat(e.target.value === "Other");

    setworddata((old) => ({ ...old, cat: "Add new cat ..." }));
  }

  return (
    <div className=" items-center md:items-start gap-4 flex flex-col form-word">
      <div className="text-xl border-t">Insert new word or sentence</div>

      <div>
        <select
          onChange={onChangeWordCat}
          value={worddata.cat || ""}
          className="select select-bordered w-full max-w-xs"
        >
          <option disabled selected>
            Category
          </option>
          <option>Category</option>
          <option>Han Solo</option>
          <option>Greedo</option>
          <option>Other</option>
        </select>
      </div>

      {shownewcat && (
        <input
          name="newcat"
          onChange={(e) =>
            setworddata((old) => ({ ...old, cat: e.target.value }))
          }
          value={worddata.cat || ""}
          type="text"
          placeholder="New cat"
          className="input input-bordered w-full max-w-xs"
        />
      )}

      <input
        name="zh"
        onChange={(e) =>
          setworddata((old) => ({ ...old, [e.target.name]: e.target.value }))
        }
        value={worddata.zh || ""}
        type="text"
        placeholder="New word of phrase in chinese"
        className="input input-bordered w-full max-w-xs"
      />

      <input
        name="py"
        onChange={(e) =>
          setworddata((old) => ({ ...old, [e.target.name]: e.target.value }))
        }
        value={worddata.py || ""}
        type="text"
        placeholder="pinyin"
        className="input input-bordered w-full max-w-xs"
      />

      <input
        name="fr"
        onChange={(e) =>
          setworddata((old) => ({ ...old, [e.target.name]: e.target.value }))
        }
        value={worddata.fr || ""}
        type="text"
        placeholder="french meaning"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        name="sw"
        onChange={(e) =>
          setworddata((old) => ({ ...old, [e.target.name]: e.target.value }))
        }
        value={worddata.sw || ""}
        type="text"
        placeholder="swahili"
        className="input input-bordered w-full max-w-xs"
      />

      {worddata.cat !== "" &&
        worddata.cat !== "Add new cat ..." &&
        worddata.fr !== "" &&
        worddata.py !== "" &&
        worddata.sw !== "" &&
        worddata.zh !== "" && (
          <button onClick={onSaveNewWord} className="btn btn-primary md:w-full">
            SAVE
          </button>
        )}
    </div>
  );
}

function AdminPanel() {
  return (
    <div className="mx-auto max-w-[900px]">
      <div className="flex flex-col-reverse md:flex-row justify-between p-4 ">
        <FormNewWord />

        <div className=" flex-grow p-8">
          <div className="flex items-center flex-col">
            <div className="text-[32pt] font-black bg-gradient-to-r bg-clip-text text-transparent from-purple-500 to-blue-500">
              汉语拼音
            </div>
            <div className=" text-neutral-400 ">Hànyǔ pīnyīn</div>
            <div>
              <label className="cursor-pointer label">
                <span className="label-text">Show pinyin keyboard </span>
                <input
                  type="checkbox"
                  className="toggle toggle-primary"
                  checked
                />
              </label>
            </div>

            <div>
              {pinyins.map((accent, i) => (
                <div key={i}>
                  {accent.split(" ").map((lt, i) => (
                    <button
                      key={lt}
                      className=" hover:bg-sky-500 focus:bg-sky-300 hover:text-white kbd text-sm m-1"
                    >
                      {lt}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
