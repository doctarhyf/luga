import React from "react";

const pinyins: string[] = [
  "ā ē ī ō ū ǖ Ā Ē Ī Ō Ū Ǖ",
  "á é í ó ú ǘ Á É Í Ó Ú Ǘ",
  "ǎ ě ǐ ǒ ǔ ǚ Ǎ Ě Ǐ Ǒ Ǔ Ǚ",
  "à è ì ò ù ǜ À È Ì Ò Ù Ǜ",
  "a e i o u ü A E I O U Ü",
];

function PinyinKB() {
  return (
    <div className=" flex-grow p-8">
      <div className="flex items-center flex-col">
        <div className="text-[32pt] font-black bg-gradient-to-r bg-clip-text text-transparent from-purple-500 to-blue-500">
          汉语拼音
        </div>
        <div className=" text-neutral-400 ">Hànyǔ pīnyīn</div>
        <div>
          <label className="cursor-pointer label">
            <span className="label-text">Show pinyin keyboard </span>
            <input type="checkbox" className="toggle toggle-primary" checked />
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
  );
}

export default PinyinKB;
