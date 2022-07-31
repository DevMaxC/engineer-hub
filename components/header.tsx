import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { MenuIcon, SearchIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";

function header() {
  const [toggled, setToggled] = useState<boolean>(false);
  const languageList = [
    "Python",
    "Ruby",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Java",
    "Haskell",
  ];
  const jobTypeList = [
    "Front-end",
    "Back-End",
    "Full-Stack",
    "Remote",
    "In-Office",
  ];
  const toggleTerm = (term: string) => {
    if (searchTerms.includes(term)) {
      setSearchTerms(
        searchTerms.filter((value) => {
          return value != term;
        })
      );
    } else {
      setSearchTerms([...searchTerms, term]);
    }
  };

  const [searchBarValue, setSearchBarValue] = useState<string>("");
  const [searchTerms, setSearchTerms] = useState<string[]>([]);

  return (
    <div className="fixed top-0 z-20 w-full">
      <div className="pointer-events-none absolute top-4 left-5 z-30 flex items-center align-middle font-extrabold text-white lg:my-auto xl:text-4xl">
        <h1 className="hidden xl:block">TechHired</h1>
        <div className="h-16 w-16">
          <Image
            alt="TechHired Logo"
            layout="fixed"
            height={64}
            width={64}
            src="/logo.svg"
          ></Image>
        </div>
      </div>
      <button
        onClick={() => setToggled(!toggled)}
        aria-label={"Toggle menu"}
        className={
          "fixed right-4 top-7 z-50 aspect-square w-10 border-none  transition" +
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
        } fixed top-0 right-0 z-40 h-screen w-screen bg-white text-white shadow-xl transition lg:w-1/4`}
      >
        <div className="flex flex-col p-10 pt-24 text-center text-black lg:p-0 lg:pt-24">
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
          <Link href={"/Contact"}>
            <a className="border p-4 text-2xl font-bold hover:bg-gray-100">
              Contact
            </a>
          </Link>
        </div>
        <div className="flex h-full flex-col justify-end text-black">Max</div>
      </div>

      <nav
        className={"flex min-w-full justify-center bg-blue-600 p-6 text-white "}
      >
        <div className=" relative w-[60%]">
          <input
            placeholder="Search"
            aria-label="Search input"
            onChange={(e) => setSearchBarValue(e.currentTarget.value)}
            className="peer w-full appearance-none rounded-xl border py-2 px-3 text-2xl font-extralight leading-tight text-gray-400 transition focus:text-black focus:outline-none  "
          />
          <button
            aria-label="Search Button"
            className="peer text-gray-400 focus:text-black peer-focus:text-black"
          >
            <SearchIcon className="absolute right-3 top-1/2 w-8 -translate-y-1/2" />
          </button>
          {searchBarValue.length == 0 && (
            <div
              className="peer absolute top-14 right-1/2 z-30 hidden h-96 w-full translate-x-1/2 rounded-b-lg border border-t-0 border-gray-300 bg-gray-50 shadow transition-all focus-within:block hover:block focus:block peer-focus:block lg:w-[50vw]"
              tabIndex={0}
            >
              <div className="grid grid-cols-2 lg:grid-cols-3">
                <div className="p-1">
                  <h2 className="text-center font-thin">
                    Programming languages
                  </h2>
                  <ul className="flex flex-wrap justify-center gap-1 p-2">
                    {languageList.map((language, index) => {
                      return (
                        <li key={index} className="">
                          <button
                            onClick={() => {
                              toggleTerm(language);
                            }}
                            className={`rounded-full border px-2 py-1   transition-colors ${
                              searchTerms.includes(language)
                                ? "bg-blue-600 text-white"
                                : "bg-white text-black"
                            }`}
                          >
                            {language}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="p-1">
                  <h2 className="text-center font-thin">Job Type</h2>
                  <ul className="overflow-y-scroll"></ul>
                </div>
                <div className="col-span-2 p-1 lg:col-span-1">
                  <h2 className="text-center font-thin">Other</h2>
                  <ul className="overflow-y-scroll"></ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default header;
