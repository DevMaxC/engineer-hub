import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import { toClient } from "../pages/index";
import { InformationCircleIcon } from "@heroicons/react/outline";
import Link from "next/link";
import PillTech from "./pillTech";
import PillSeniority from "./pillSeniority";
import AdditionalPill from "./additionalPill";

function maxChars(text: string | undefined, count: number) {
  if (text == undefined) {
    return "";
  } else {
    return text.slice(0, count) + (text.length > count ? "..." : "");
  }
}

function job(jobProps: toClient) {
  return (
    <div className="relative ">
      <a
        href={"/company/" + jobProps.id}
        className="absolute -top-3 -left-3 z-10 h-12 w-12 overflow-hidden rounded-full bg-white ring-2 ring-blue-600/30 transition hover:scale-[1.01] hover:ring-blue-600"
        target="_blank"
        title={"All " + jobProps.name + " jobs"}
      >
        <Image
          height={48}
          width={48}
          layout="fixed"
          className="scale-95"
          alt={jobProps.name + "Logo"}
          src={jobProps.image == undefined ? "" : jobProps.image}
        />
      </a>
      <a
        className="z-0 flex w-full flex-col justify-between rounded-2xl bg-gray-300/60 p-2 shadow-white transition-all duration-300 ease-in-out hover:bg-gray-300/40 xl:flex-row xl:p-6"
        href={jobProps.url}
        target="_blank"
      >
        <div className="mx-7 flex h-full min-w-fit flex-col justify-center gap-2 xl:mx-0 xl:ml-10">
          <div className="text-center text-lg text-gray-700 xl:text-left xl:text-xl">
            <h1>
              <span className="text-black">{jobProps.name}</span> -{" "}
              {maxChars(jobProps.title, 25)}
            </h1>
          </div>

          <div className="flex flex-wrap justify-center gap-2 xl:justify-start">
            <PillSeniority seniority={jobProps.seniority} />
            {jobProps.techs.slice(0, 4).map((tech, index) => {
              return (
                <div key={index}>
                  <PillTech techName={tech} active={true} />
                </div>
              );
            })}
            {jobProps.techs.length > 4 && (
              <AdditionalPill
                itemsRemaining={jobProps.techs.length - 4}
                additionalItems={jobProps.techs.slice(4, jobProps.techs.length)}
              />
            )}
          </div>
        </div>
        <div className="mx-auto my-auto flex h-full flex-shrink-0 flex-row items-center justify-center gap-2 xl:mr-6 xl:ml-2 xl:flex-col xl:items-end xl:justify-center">
          <h1 className="text-center text-lg text-gray-700 xl:text-right xl:text-2xl">
            {jobProps.remote ? "Remote" : jobProps.city}
          </h1>
          {jobProps.country != "" && (
            <h1 className="text-center text-lg text-gray-700 xl:text-right xl:text-2xl">
              {jobProps.country}
            </h1>
          )}
        </div>
      </a>
    </div>
  );
}

export default job;
