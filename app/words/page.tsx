import React from "react";
import { LANG_DEFAULT, categories, strings } from "../flow";
import Link from "next/link";
import Image from "next/image";

const API_KEY = "https://jsonplaceholder.typicode.com/photos";

interface IItem {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

async function getData() {
  const res = await fetch(API_KEY);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function WordsList({ searchParams }: { searchParams: any }) {
  const clp = "mx-auto max-w-[900px]";
  const category = searchParams.cat;
  const { lang } = searchParams;
  const selectedLang: string = lang === undefined ? LANG_DEFAULT.symbol : lang;
  const data: IItem[] = []; //await getData();

  console.log(data);

  if (category === undefined)
    return (
      <div className={clp}>
        <div>Please select a category to continue</div>
        <div>
          {categories.map((w, i) => (
            <Link
              href={`?cat=${w.path}&lang=${selectedLang}`}
              className="btn btn-success"
            >
              {w.name.fr}
            </Link>
          ))}
        </div>
      </div>
    );

  return (
    <div className={clp}>
      <div>ordsList {category}</div>
      <div>
        {data.map((d: IItem, i: number) => (
          <div key={i}>
            <div>{d.title}</div>
            <div>
              <Image
                alt={d.title}
                src={d.thumbnailUrl}
                width={30}
                height={30}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WordsList;
