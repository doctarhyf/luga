"use client";
import Image from "next/image";
import { useState } from "react";
import { countries, Country, strings, Word } from "../flow";
import { useRouter } from "next/navigation";

export default function Home() {
  const [selectedCountry, setSelectedCountry]: [Country, any] = useState(
    countries.DRC
  );

  const router = useRouter();

  function onCardClicked(country: Country) {
    setSelectedCountry(country);
    localStorage.setItem("CT", JSON.stringify(country));
  }

  function onStart() {
    router.push("/home");
  }

  return (
    <main className="p-4 text-center">
      <p className="text-[18pt] my-8">
        Tshakula langue/语言选择/choisir la langue
      </p>

      <div className="  text-center  md:flex gap-4 justify-center">
        {Object.values(countries).map((country, i) => (
          <div
            onClick={(e) => onCardClicked(country)}
            key={i}
            className={` ${
              country.id === selectedCountry.id
                ? " border-sky-500 border bg-sky-500 text-white  "
                : ""
            } cursor-pointer border hover:border-sky-300 card mb-4 p-4 w-full bg-base-100 shadow-xl`}
          >
            <div className=" w-fit mx-auto md:w-full mb-4 overflow-hidden  rounded-md h-[50pt] ">
              <Image
                className=" rounded-md  mx-auto"
                src={country.img}
                width={120}
                height={100}
                alt="Picture of the author"
              />
            </div>

            <div className="font-bold">{country.me}</div>
            <div className="text-neutral-500 text-xs">{country.name}</div>
          </div>
        ))}
      </div>

      <button
        className="btn md:w-80 w-full btn-primary"
        onClick={(e) => onStart()}
      >
        {strings[1][selectedCountry.lang as keyof Word]}
      </button>
    </main>
  );
}
