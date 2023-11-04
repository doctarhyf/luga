import "./globals.css";

import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/luga.png";
import { ROUTES } from "./flow";
import { IRoute } from "./types/types";

const inter = Inter({ subsets: ["latin"] });

export function Header() {
  const mavMenuItems: IRoute[] = [
    ROUTES.ROOT,
    ROUTES.LOGIN,
    ROUTES.SUBSCRIPTION,
    ROUTES.LANG,
    ROUTES.WORDS_REQUESTS,
    ROUTES.CATEGORIES,
    ROUTES.SEARCH,
    ROUTES.WORDS_LIST,
  ];

  return (
    <div className="navbar bg-base-100 max-w-[900px] mx-auto ">
      {/*  <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div> */}

      <div className=" flex-1  w-fit font-bold text-xl ">
        <Link href={ROUTES.ROOT.path}>
          <Image
            alt="luga"
            className=" object-contain -ml-20  h-[30pt]"
            src={logo}
          />
        </Link>
      </div>

      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <>
                {mavMenuItems.map((rt: IRoute, i) => (
                  <Link
                    key={i}
                    href={`${rt.path}`}
                    className="p-2 hover:text-orange-500 hover:font-bold"
                  >
                    <div>{rt.label}</div>
                  </Link>
                ))}
              </>

              {false && (
                <>
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>{" "}
                </>
              )}
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/rhyf.jpg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <div className="main-footer bg-black h-max text-white relative  ">
      <div className=" mb-8 max-w-[900px] mx-auto p-4 text-white flex flex-col md:flex-row gap-4">
        {[
          { name: ROUTES.ROOT.label, path: ROUTES.ROOT.path },
          { name: ROUTES.CATEGORIES.label, path: ROUTES.CATEGORIES.path },
          /* { name: ROUTES.ADMIN.label, path: ROUTES.ADMIN.path }, */
          {
            name: ROUTES.WORDS_REQUESTS.label,
            path: ROUTES.WORDS_REQUESTS.path,
          },
        ].map((l, i) => (
          <Link key={i} href={l.path}>
            {l.name}
          </Link>
        ))}
      </div>
      <div className="bg-neutral-800 md:text-center text-sm text-neutral-400 p-4  bottom-0 w-full">
        © 2023 - Luga. All Rights Reserved.
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Luga",
  description: "Apprendre le chinois et swahili pour le milieu professionel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">
          <Header />
          <div className=" flex-grow main-cont   ">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
