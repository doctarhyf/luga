"use client";
import React, { useEffect, useState } from "react";
import { Country, Word, strings } from "../flow/flow";

function Home() {
  const [lang, setlang] = useState("fr");

  useEffect(() => {
    let countryString = localStorage.getItem("CT");
    if (countryString === null) {
      setlang("fr");
    } else {
      const country: Country = JSON.parse(countryString);
      console.log(country);
      setlang(country.lang);
    }
    console.log(countryString);
  }, []);

  return (
    <div className="">
      <div className="">
        <input
          type="text"
          placeholder={strings[2][lang as keyof Word] + " ..."}
          className="input input-bordered w-full md:max-w-xs "
        />
      </div>
      <div>{strings[3][lang as keyof Word]}</div>
    </div>
  );
}

export default Home;
