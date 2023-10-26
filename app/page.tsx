"use client";
import Image from "next/image";
import { useState } from "react";
import { countries, Country, strings, Word } from "./flow";
import { useRouter } from "next/navigation";

interface Feature {
  title: string;
  desc: string;
  img: string;
}

const features: Feature[] = [
  {
    title: "Free access",
    desc: "All graded reading lessons are free to learn and practice.",
    img: "/feat_1.png",
  },
  {
    title: "Subcription",
    desc: "All graded reading lessons are free to learn and practice.",
    img: "/feat_2.png",
  },
  {
    title: "Real world examples",
    desc: "All graded reading lessons are free to learn and practice.",
    img: "/feat_3.png",
  },
  {
    title: "Add Friends",
    desc: "All graded reading lessons are free to learn and practice.",
    img: "/feat_4.png",
  },
  {
    title: "Downloadable Materials",
    desc: "All graded reading lessons are free to learn and practice.",
    img: "/feat_5.png",
  },
  {
    title: "Videos",
    desc: "All graded reading lessons are free to learn and practice.",
    img: "/feat_6.png",
  },
];

function MainSplash() {
  const router = useRouter();
  function onStart() {
    router.push("/lang");
  }
  return (
    <div className=" h-[320pt] relative overflow-hidden ">
      <div className="bg-green-500 w-full h-full absolute ">
        <img
          src="/home.jpg"
          alt="my image"
          className=" object-cover h-[100%] w-[100%]  "
        />
      </div>
      <div className=" blk-overlay w-full h-full bg-black/50 absolute "></div>

      <div className="absolute gap-8 text-white mx-auto  p-8 text-xl md:text-3xl lg:text-[30pt] w-full ">
        <div className=" w-[90%] md:w-[50%] mx-auto text-center mt-4">
          How to improve my Chinese reading and listening？
        </div>

        <div className=" my-8 text-xs text-transparent border-b-4 w-fit mx-auto border-pink-500">
          ------------------
        </div>

        <div className=" md:w-[50%] mx-auto text-base text-center my-4 ">
          We provide Mandarin Chinese learners with easy access to study
          materials that are high-quality, contextual ...and definitely not
          boring!
        </div>

        <div className="mx-auto w-full mt-8 text-center md:w-fit">
          <button onClick={onStart} className="btn btn-secondary  ">
            Access all graded reading lessons
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [selectedCountry, setSelectedCountry]: [Country, any] = useState(
    countries.DRC
  );

  function onCardClicked(country: Country) {
    setSelectedCountry(country);
    localStorage.setItem("CT", JSON.stringify(country));
  }

  return (
    <div className=" ">
      <MainSplash />

      <main className=" p-4  w-full max-w-[900px] mx-auto">
        <div className="flex justify-center  md:justify-between items-center  flex-wrap ">
          {features.map((feat, i) => (
            <div
              key={i}
              className=" mb-8 md:mb-4 text-center mx-4 md:max-w-[40%]  "
            >
              <div>
                <img src={feat.img} className="mx-auto my-4" />
              </div>
              <div>
                <div className="text-3xl text-neutral-700">{feat.title}</div>
                <div className="text-neutral-500">{feat.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div>Small desc</div>
      </main>
    </div>
  );
}
