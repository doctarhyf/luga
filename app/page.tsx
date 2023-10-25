"use client";
import Image from "next/image";
import { useState } from "react";
import { strings, Word } from "./flow/strings";

interface WordToken {
  fr: string;
  zh: string;
  sw: string;
}

type Country = {
  id: number;
  img: string;
  name: string;
  me: string;
  lang: string;
};

const countries: Record<string, Country> = {
  DRC: {
    id: 0,
    img: "/drc.png",
    name: "DR Congo",
    me: "Swahili",
    lang: "sw",
  },
  PRC: {
    id: 1,
    img: "/prc.png",
    name: "People's Republic of China",
    me: "中文",
    lang: "zh",
  },
  FR: {
    id: 2,
    img: "/fr.png",
    name: "France",
    me: "Francais",
    lang: "fr",
  },
};

export default function Home() {
  const [selectedCountry, setSelectedCountry]: [Country, any] = useState(
    countries.DRC
  );

  function onCardClicked(country: Country) {
    setSelectedCountry(country);
  }

  return (
    <main className="p-4 text-center">
      <p className="text-[28pt] my-8">Je suis: / 我是:</p>

      <div className=" mx-auto text-center w-fit  md:flex md:flex-row md:space-x-4 justify-center">
        {Object.values(countries).map((country, i) => (
          <div
            onClick={(e) => onCardClicked(country)}
            key={i}
            className={` ${
              country.id === selectedCountry.id
                ? " border-sky-500 border bg-sky-500 text-white  "
                : ""
            } cursor-pointer border hover:border-sky-300 card mb-4 p-4 w-96 bg-base-100 shadow-xl`}
          >
            <Image
              className="mx-auto"
              src={country.img}
              width={120}
              height={120}
              alt="Picture of the author"
            />
            <div>{country.name}</div>
            <div>{country.me}</div>
          </div>
        ))}
      </div>

      <button className="btn btn-primary">
        {strings[1][selectedCountry.lang as keyof Word]}
      </button>
    </main>
  );
}
