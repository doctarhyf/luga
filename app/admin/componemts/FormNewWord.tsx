"use client";

import { useState } from "react";

export default function FormNewWord() {
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

      {
        //test
        worddata.cat !== "" &&
          worddata.cat !== "Add new cat ..." &&
          worddata.fr !== "" &&
          worddata.py !== "" &&
          worddata.sw !== "" &&
          worddata.zh !== "" && (
            <button
              onClick={onSaveNewWord}
              className="btn btn-primary md:w-full"
            >
              SAVE
            </button>
          )
      }
    </div>
  );
}
