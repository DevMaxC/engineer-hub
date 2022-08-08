import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { MenuIcon, SearchIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";
import { Filter, useIsMount } from "../pages";
import { useAutoAnimate } from "@formkit/auto-animate/react";

interface Props {
  filter: Filter;
  filterSetter: Dispatch<SetStateAction<Filter>>;
}

function header(props: Props) {
  const [toggled, setToggled] = useState<boolean>(false);
  const languageList = [
    "JavaScript",
    "TypeScript",
    "HTML",
    "Haskell",
    "React Native",
    "React",
    "Gatsby",
    "Svelte",
    "jQuery",
    "Flutter",
    "Express",
    "Angular",
    "Vue",
    "Nuxt",
    "Java",
    ".NET Core",
    ".NET Framework",
    "Prisma",
    "AWS",
    "Google Cloud",
    "Microsoft Azure",
    "DigitalOcean",
    "Heroku",
    "Redis",
    "MongoDB",
    "Elixir",
    "Docker",
    "Laravel",
    "Kubernetes",
    "Ruby",
    "Firebase",
    "Node",
    "Webpack",
    "Scala",
    "Golang",
    "PHP",
    "Objective-C",
    "Delphi",
    "Perl",
    "Dart",
    "Swift",
    "C#",
    "Rust",
    "Redux",
    "Babel",
    "Tailwind",
    "NextJS",
    "Kotlin",
    "C++",
    "SASS",
    "Django",
    "TensorFlow",
    "Python",
  ];
  const radioSeniorityList = ["Junior", "Senior", "Staff"];

  const isSubstringOf = (superstring: string, substring: string) => {
    return superstring.toUpperCase().indexOf(substring.toUpperCase()) !== -1;
  };

  const toggleTerm = (term: string) => {
    if (searchTerms !== undefined && searchTerms.includes(term)) {
      setSearchTerms(
        searchTerms.filter((value) => {
          return value != term;
        })
      );
    } else {
      if (searchTerms !== undefined) {
        setSearchTerms([...searchTerms, term]);
      } else {
        setSearchTerms([term]);
      }
    }
  };

  const [animationParent] = useAutoAnimate<HTMLDivElement>();

  const [searchBarValue, setSearchBarValue] = useState<string>("");
  const [searchTerms, setSearchTerms] = useState<string[] | undefined>(
    undefined
  );
  const [searchSeniority, setSearchSeniority] = useState<string | undefined>(
    undefined
  );
  const [remoteSet, setRemoteSet] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    props.filterSetter({
      seniority: searchSeniority,
      remote: remoteSet,
      tech: searchTerms,
    });
  }, [searchTerms, searchSeniority, remoteSet]);

  return (
    <div className="fixed top-0 z-20 w-full">
      <div className="pointer-events-none absolute top-4 left-5 z-30 flex items-center align-middle font-extrabold text-white xl:my-auto xl:text-4xl">
        <h1 className="hidden xl:block">TechHired</h1>
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
      </div>
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

          <div
            className="80 peer absolute top-14 right-1/2 z-30 hidden h-min w-[80vw] translate-x-1/2 rounded-b-lg border border-t-0 border-gray-300 bg-gray-50 shadow transition-all focus-within:block hover:block focus:block peer-focus:block xl:w-[50vw]"
            tabIndex={0}
          >
            <div className="grid grid-cols-2 p-4">
              <div className=" col-span-2 h-min rounded-lg p-2 xl:col-span-1">
                <h2 className=" text-center font-thin text-black">
                  Programming languages
                </h2>
                <ul className="flex max-h-40 flex-wrap justify-center gap-1 overflow-y-auto p-2 xl:max-h-80">
                  {languageList.map((language, index) => {
                    if (
                      isSubstringOf(language, searchBarValue) ||
                      searchBarValue === undefined
                    ) {
                      return (
                        <li key={index} className="">
                          <button
                            onClick={() => {
                              toggleTerm(language);
                            }}
                            className={`rounded-full border px-2 py-1   transition-colors ${
                              searchTerms !== undefined &&
                              searchTerms.includes(language)
                                ? "bg-blue-600 text-white"
                                : "bg-white text-black"
                            }`}
                          >
                            {language}
                          </button>
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
              <div className="col-span-2 mt-4 h-min rounded-lg border-gray-300 bg-gray-200 p-2 xl:col-span-1">
                <div>
                  <h2 className=" text-center font-thin text-black">
                    Seniority
                  </h2>
                  <ul className="flex max-h-80 flex-wrap justify-center gap-1 overflow-y-auto p-2">
                    {radioSeniorityList.map((radioSeniority, index) => {
                      return (
                        <li key={index} className="">
                          <button
                            onClick={() => {
                              if (searchSeniority !== radioSeniority) {
                                setSearchSeniority(radioSeniority);
                              } else {
                                setSearchSeniority(undefined);
                              }
                            }}
                            className={`rounded-full border px-2 py-1   transition-colors ${
                              searchSeniority == radioSeniority
                                ? "bg-blue-600 text-white"
                                : "bg-white text-black"
                            }`}
                          >
                            {radioSeniority}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div>
                  <h2 className=" text-center font-thin text-black">
                    Job Type
                  </h2>
                  <ul className="flex max-h-80 flex-wrap justify-center gap-1 overflow-y-auto p-2">
                    <li>
                      <button
                        onClick={() => {
                          if (remoteSet != true) {
                            setRemoteSet(true);
                          } else {
                            setRemoteSet(undefined);
                          }
                        }}
                        className={`rounded-full border px-2 py-1   transition-colors ${
                          remoteSet == true
                            ? "bg-blue-600 text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        Remote
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          if (remoteSet != false) {
                            setRemoteSet(false);
                          } else {
                            setRemoteSet(undefined);
                          }
                        }}
                        className={`rounded-full border px-2 py-1   transition-colors ${
                          remoteSet == false && remoteSet != undefined
                            ? "bg-blue-600 text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        In person
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default header;
