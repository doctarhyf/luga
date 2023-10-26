import React from "react";

const pinyins = [
  "ā ē ī ō ū ǖ Ā Ē Ī Ō Ū Ǖ",
  "á é í ó ú ǘ Á É Í Ó Ú Ǘ",
  "ǎ ě ǐ ǒ ǔ ǚ Ǎ Ě Ǐ Ǒ Ǔ Ǚ",
  "à è ì ò ù ǜ À È Ì Ò Ù Ǜ",
  "a e i o u ü A E I O U Ü",
];

function AdminPanel() {
  return (
    <div className="mx-auto max-w-[900px]">
      <div className="flex flex-col-reverse md:flex-row justify-between p-4 ">
        <div className=" items-center md:items-start gap-4 flex flex-col form-word">
          <div>Insert new word or sentence</div>

          <div>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Category
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
              <option>Other</option>
            </select>
          </div>

          <input
            type="text"
            placeholder="word category"
            className="input input-bordered w-full max-w-xs"
          />

          <input
            type="text"
            placeholder="New word of phrase in chinese"
            className="input input-bordered w-full max-w-xs"
          />

          <input
            type="text"
            placeholder="pinyin"
            className="input input-bordered w-full max-w-xs"
          />

          <input
            type="text"
            placeholder="french meaning"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="swahili"
            className="input input-bordered w-full max-w-xs"
          />

          <button className="btn btn-primary md:w-full">SAVE</button>
        </div>

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
