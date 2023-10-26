"use client";
import Image from "next/image";
import { useState } from "react";
import { countries, Country, strings, Word } from "./flow";
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
      <p className="text-[28pt] my-8">Je suis: / 我是:</p>

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
            cool
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

      <button
        className="btn md:w-80 w-full btn-primary"
        onClick={(e) => onStart()}
      >
        {strings[1][selectedCountry.lang as keyof Word]}
      </button>
    </main>
  );
}
