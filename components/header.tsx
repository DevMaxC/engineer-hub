import React, { useState } from "react";
import { MenuIcon, SearchIcon } from "@heroicons/react/outline";

type Props = {};

function header({}: Props) {
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
  const [searchTerms, setSearchTerms] = useState<string[]>([]);
  return (
    <nav className="sticky top-0 z-10 grid grid-cols-3 bg-white p-4 shadow-md shadow-purple-300 ">
      <a
        className="hidden text-center text-3xl font-thin text-purple-600 md:block"
        href="/"
      >
        Engi
      </a>
      <div className="relative col-span-2 md:col-span-1">
        <input
          placeholder="Search by stack"
          className="peer w-full appearance-none rounded border py-2 px-3 leading-tight text-purple-700 shadow shadow-purple-300 focus:outline-none  "
        />
        <span className="absolute right-10 top-1/2 -translate-y-1/2 rounded-full bg-purple-500 px-2 text-xs text-white">
          {searchTerms.length}
        </span>
        <button className="peer-focus:text-p peer text-purple-600">
          <SearchIcon className="absolute right-3 top-2 w-6" />
        </button>
        <div
          className="peer absolute top-14 right-1/2 z-10 hidden h-96 w-[66vw] translate-x-1/2 rounded-b-lg border border-t-0 border-slate-300 bg-slate-50 shadow transition-all focus-within:block hover:block focus:block peer-focus:block lg:w-[50vw]"
          tabIndex={0}
        >
          <div className="grid grid-cols-2 lg:grid-cols-3">
            <div className="p-1">
              <h2 className="text-center font-thin">Programming languages</h2>
              <ul className="flex flex-wrap justify-center gap-1 p-2">
                {languageList.map((language, index) => {
                  return (
                    <li key={index} className="">
                      <button
                        onClick={() => {
                          toggleTerm(language);
                        }}
                        className={`rounded-full border px-2 py-1  transition-colors ${
                          searchTerms.includes(language)
                            ? "border-purple-600 bg-purple-500 text-white"
                            : "border-gray-300 bg-white"
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
      </div>
      <button
        onClick={() => setToggled(!toggled)}
        className={
          "aspect-square w-10 justify-self-end border-none text-purple-700 transition hover:text-purple-900 " +
          (toggled ? "rotate-90" : "")
        }
      >
        <MenuIcon />
      </button>
    </nav>
  );
}

export default header;
