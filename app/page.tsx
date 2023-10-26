"use client";
import Image from "next/image";
import { useState } from "react";
import { countries, Country, strings, Word } from "./flow";
import { useRouter } from "next/navigation";

interface Feature {
  title: string;
  desc: string;
  img: string;
  big: boolean;
  btn: string;
}

const features: Feature[] = [
  {
    title: "Free access",
    desc: "All graded reading lessons are free to learn and practice.",
    img: "/feat_1.png",
    big: false,
    btn: "",
  },
  {
    title: "Subcription",
    desc: "All graded reading lessons are free to learn and practice.",
    img: "/feat_2.png",
    big: false,
    btn: "",
  },
  {
    title: "Real world examples",
    desc: "All graded reading lessons are free to learn and practice.",
    img: "/feat_3.png",
    big: false,
    btn: "",
  },
  {
    title: "Add Friends",
    desc: "All graded reading lessons are free to learn and practice.",
    img: "/feat_4.png",
    big: false,
    btn: "",
  },
  {
    title: "Downloadable Materials",
    desc: "All graded reading lessons are free to learn and practice.",
    img: "/feat_5.png",
    big: false,
    btn: "",
  },
  {
    title: "Videos",
    desc: "All graded reading lessons are free to learn and practice.",
    img: "/feat_6.png",
    big: false,
    btn: "",
  },
  {
    title: "Downloadable Materials",
    desc: "Practice your Chinese skills with our Chinese grammar exercises! See what you’ve learned well and what you need to practice more. It contains key grammar points from all HSK levels.",
    img: "/feat_7.png",
    big: true,
    btn: "Chinese Grammar Exercises",
  },
  {
    title: "Videos",
    desc: "Practice your Chinese skills with our Chinese grammar exercises! See what you’ve learned well and what you need to practice more. It contains key grammar points from all HSK levels.",
    img: "/feat_8.png",
    big: true,
    btn: "HSK Sample Tests",
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

  const router = useRouter();
  function onStart() {
    router.push("/lang");
  }

  function onCardClicked(country: Country) {
    setSelectedCountry(country);
    localStorage.setItem("CT", JSON.stringify(country));
  }

  return (
    <div className=" ">
      <MainSplash />

      <main className=" p-4  w-full max-w-[900px] mx-auto">
        <div className="flex justify-center  md:justify-between items-center  flex-wrap ">
          {features.map(
            (feat, i) =>
              !feat.big && (
                <div
                  key={i}
                  className=" mb-8 md:mb-4 text-center mx-4 md:max-w-[40%]  "
                >
                  <div>
                    <img src={feat.img} className="mx-auto my-4" />
                  </div>
                  <div>
                    <div className="text-3xl text-neutral-700">
                      {feat.title}
                    </div>
                    <div className="text-neutral-500">{feat.desc}</div>
                  </div>
                </div>
              )
          )}
        </div>

        <div className="mx-auto w-full my-8 text-center md:w-fit">
          <button onClick={onStart} className="btn btn-secondary  ">
            Access all graded reading lessons
          </button>
        </div>

        <div className="border-t">
          {features.map(
            (feat, i) =>
              feat.big && (
                <div key={i}>
                  <div
                    className={` ${
                      i % 2 !== 0 ? "md:ml-[90%]" : ""
                    } my-8 text-xs text-transparent border-b-4 w-fit mx-auto md:mx-0 border-pink-500`}
                  >
                    ------------------
                  </div>

                  <div
                    className={`flex ${
                      i % 2 !== 0 ? "flex-row-reverse" : ""
                    }  gap-8`}
                  >
                    <div>
                      <div
                        className={`text-3xl text-center ${
                          i % 2 !== 0 ? " md:text-end" : " md:text-start"
                        } text-neutral-700 my-8`}
                      >
                        {feat.title}
                      </div>
                      <div
                        className={`text-center ${
                          i % 2 !== 0 ? " md:text-end" : " md:text-start"
                        } text-neutral-500`}
                      >
                        {feat.desc}
                      </div>
                      <div
                        className={`mx-auto md:mx-0 w-full my-8 text-center ${
                          i % 2 !== 0
                            ? " md:text-end md:ml-[70%] "
                            : " md:text-start"
                        } md:w-fit`}
                      >
                        <button onClick={onStart} className="btn btn-warning  ">
                          {feat.btn}
                        </button>
                      </div>
                    </div>

                    <div>
                      <img src={feat.img} className="mx-auto" />
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </main>
    </div>
  );
}
