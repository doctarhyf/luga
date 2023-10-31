import React from "react";
import { LANG_DEFAULT, categories, strings } from "../flow";
import next from "../../public/next.svg";
import Image from "next/image";
import Link from "next/link";
import { IWord } from "../types";

function Home({ searchParams }: { searchParams: any }) {
  const { lang } = searchParams;
  const selectedLang: string = lang === undefined ? LANG_DEFAULT.symbol : lang;

  return (
    <div className="max-w-[900px] mx-auto">
      <div className="border-b mb-4">
        <div className="  text-[28pt] my-4 text-amber-600 ">
          {strings[3][selectedLang as keyof IWord]}
        </div>
        <div className="   my-4 text-neutral-500 ">
          {strings[4][selectedLang as keyof IWord]}
        </div>
      </div>
      <div className=" md:flex  ">
        {categories.map((cat, i) => (
          <Link key={i} href={`/words?cat=${cat.path}&lang=${selectedLang}`}>
            <div className=" w-full md:w-fit flex-grow p-2 m-1 mb-4 cursor-pointer hover:bg-sky-500 hover:text-white border rounded-md">
              <div className=" ">
                <div className="bg-red-500">
                  <Image
                    src={cat.pic}
                    className="w-full h-[100pt] object-cover aspect-video"
                    width={200}
                    height={200}
                    alt="next"
                  />
                </div>
                <div className="text-lg my-2  group-hover:text-white ">
                  {cat.name[selectedLang]}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
