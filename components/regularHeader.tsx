import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { MenuIcon, SearchIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";

function header() {
  const [toggled, setToggled] = useState<boolean>(false);

  return (
    <div className="fixed top-0 z-20 w-full font-inter">
      <Link href={"/"}>
        <a className="absolute top-4 left-1/2 z-30 flex -translate-x-1/2 items-center align-middle text-4xl font-extrabold text-white transition hover:scale-105 xl:my-auto">
          <h1 className="">TechHired</h1>
          <div className="h-16 w-16">
            <Image
              alt="TechHired Logo"
              layout="fixed"
              height={64}
              width={64}
              priority
              src="/logo.svg"
            ></Image>
          </div>
        </a>
      </Link>

      {/* side menu */}
      <button
        onClick={() => setToggled(!toggled)}
        aria-label={"Toggle menu"}
        className={
          "fixed right-4 top-7 z-50 aspect-square w-10 border-none transition " +
          (toggled ? "rotate-90 text-blue-600" : "visible text-white")
        }
      >
        <MenuIcon />
      </button>

      <div
        onClick={() => setToggled(false)}
        className={`${
          toggled ? "block bg-blue-600/50" : "hidden bg-blue-600/0"
        } fixed top-0 right-0 z-30 h-screen w-screen  text-white shadow-xl backdrop-blur-sm transition delay-100 duration-700 ease-linear`}
      ></div>
      <div
        className={`${
          toggled ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 z-40 h-screen w-screen bg-white text-white shadow-xl transition xl:w-1/4`}
      >
        <div className="flex flex-col p-10 pt-24 text-center text-black xl:p-0 xl:pt-24">
          <Link href={"/"}>
            <a className="border p-4 text-2xl font-bold hover:bg-gray-100">
              Home
            </a>
          </Link>
          <Link href={"/About"}>
            <a className="border p-4 text-2xl font-bold hover:bg-gray-100">
              About
            </a>
          </Link>
          <Link href={"/Companies"}>
            <a className="border p-4 text-2xl font-bold hover:bg-gray-100">
              For Companies
            </a>
          </Link>
          <Link href={"/Blog"}>
            <a className="border p-4 text-2xl font-bold hover:bg-gray-100">
              Blog
            </a>
          </Link>
          <Link href={"/Changes"}>
            <a className="border p-4 text-2xl font-bold hover:bg-gray-100">
              Change Log
            </a>
          </Link>
          <Link href={"/Contact"}>
            <a className="border p-4 text-2xl font-bold hover:bg-gray-100">
              Contact
            </a>
          </Link>
        </div>
        <div className="flex h-full flex-col justify-end text-black">Max</div>
      </div>

      <nav
        className={
          "flex h-24 min-w-full justify-center bg-blue-600 p-6 text-white "
        }
      ></nav>
    </div>
  );
}

export default header;
