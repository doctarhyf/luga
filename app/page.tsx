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
    router.push("/lang");
  }

  return (
    <div className=" w-[100vw] md:w-[900px]">
      <div className=" h-[160pt] md:h-[320pt] relative overflow-hidden ">
        <img src="/home.jpg" alt="my image" className="absolute w-[100%]  " />
        <div className="w-full h-full bg-black/40 absolute "></div>

        <div className="absolute gap-8 text-white mx-auto  p-8 text-xl md:text-3xl w-full ">
          <div className=" w-[90%] md:w-[50%] mx-auto text-center md:mt-4">
            How to improve my Chinese reading and listening？
          </div>

          <div className=" my-2 md:my-8 text-xs text-transparent border-b-4 w-fit mx-auto border-pink-500">
            coll
          </div>

          <div className="mx-auto w-full  text-center md:w-fit">
            <button onClick={onStart} className="btn btn-secondary  ">
              Access all graded reading lessons
            </button>
          </div>
        </div>
      </div>

      <div>Features</div>

      <div>Small desc</div>
    </div>
  );
}
