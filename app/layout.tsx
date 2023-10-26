import "./globals.css";

import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import logo from "../public/luga.png";

const inter = Inter({ subsets: ["latin"] });

export function Header() {
  return (
    <div className=" main-header border-b ">
      <div className=" max-w-[900px] mx-auto flex items-center justify-between p-4 ">
        <div className="  w-fit font-bold text-xl ">
          <Link href={"/"}>
            <Image
              alt="luga"
              className=" object-contain -ml-20  h-[30pt]"
              src={logo}
            />
          </Link>
        </div>

        <div>
          <Link href={"/sub"}>Login</Link>
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
          { name: "Home", path: "/" },
          { name: "Categories", path: "/categories" },
          { name: "Admin", path: "/admin" },
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
