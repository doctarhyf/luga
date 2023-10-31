import Image from "next/image";
import { useState } from "react";
import { LANGS, LANG_DEFAULT, ROUTES, countries, strings } from "../flow";
import { useRouter } from "next/navigation";
import { ICountry, IWord } from "../types";
import Link from "next/link";

export default function Home({ searchParams }: { searchParams: any }) {
  /* const [selectedCountry, setSelectedCountry]: [ICountry, any] = useState(
    countries.DRC
  ); */

  /* const router = useRouter();

  function onCardClicked(country: ICountry) {
    setSelectedCountry(country);
    localStorage.setItem("CT", JSON.stringify(country));
  }

  function onStart() {
    router.push("/categories");
  } */
  const { lang } = searchParams;
  const selectedLang: string = lang === undefined ? LANG_DEFAULT.symbol : lang;

  return (
    <main className="p-4 text-center max-w-[900px] mx-auto ">
      <p className="text-[18pt] my-8">
        Tshakula langue/语言选择/choisir la langue
      </p>

      <div className="  text-center  md:flex gap-4 justify-center">
        {Object.values(LANGS).map((curLang, i) => (
          <Link
            /*  onClick={(e) => onCardClicked(country)} */
            href={`?lang=${curLang.symbol}`}
            key={i}
            className={` ${
              curLang.symbol === selectedLang
                ? " border-sky-500 border bg-sky-500 text-white  "
                : ""
            } cursor-pointer border hover:border-sky-300 card mb-4 p-4 w-full bg-base-100 shadow-xl`}
          >
            <div className=" w-fit mx-auto md:w-full  overflow-hidden  rounded-md h-[50pt] ">
              <Image
                className=" rounded-md  mx-auto"
                src={`/${curLang.flag}`}
                width={60}
                height={60}
                alt="Picture of the author"
              />
            </div>

            <div className="font-bold">{curLang.name}</div>
            <div
              className={`text-neutral-500 text-xs  ${
                curLang.symbol === selectedLang ? "text-purple-900" : ""
              } `}
            >
              {curLang.me}
            </div>
          </Link>
        ))}
      </div>

      <Link
        href={ROUTES.CATEGORIES.path}
        className="btn md:w-80 w-full btn-primary"
        /*  onClick={(e) => onStart()} */
      >
        {strings[1][selectedLang as keyof IWord]}
      </Link>
    </main>
  );
}
