import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const rhyf: string =
  "https://media.licdn.com/dms/image/C5603AQFEDr3QdwqfNA/profile-displayphoto-shrink_800_800/0/1517375232641?e=2147483647&v=beta&t=g59GObJu5EVgPaFR5T--1NmA6Fp949oJRiaoIsCe8EU";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex items-center justify-between p-4 bg-sky-500 text-white">
          <div className=" font-bold text-xl ">
            <Link href={"/"}>LUGA</Link>
          </div>
          <div>
            <div className="dropdown">
              <label
                tabIndex={0}
                className=" rounded-full cursor-pointer overflow-hidden  "
              >
                Rhyf
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p-4">{children}</div>
      </body>
    </html>
  );
}
