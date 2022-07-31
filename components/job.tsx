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
        className="absolute -top-3 -left-3 z-10 h-12 w-12 overflow-hidden rounded-full bg-white ring-blue-600 transition hover:scale-[1.01] hover:ring-2"
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
        className="z-0 flex w-full flex-col justify-between rounded-2xl border-2 border-gray-300 bg-gray-200 p-2 shadow-xl shadow-white transition hover:-translate-y-[1px] hover:scale-[1.001] hover:shadow-xl lg:flex-row lg:p-6 "
        href={jobProps.url}
        target="_blank"
      >
        <div className="mx-7 flex h-full min-w-fit flex-col justify-center gap-4 lg:mx-0 lg:ml-10">
          <div className="text-center text-lg text-gray-700 lg:text-left lg:text-2xl">
            <h1>
              <span className="text-black">{jobProps.name}</span> -{" "}
              {maxChars(jobProps.title, 25)}
            </h1>
          </div>

          <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
            <PillSeniority seniority={jobProps.seniority} />
            {jobProps.techs.slice(0, 4).map((tech, index) => {
              return <PillTech techName={tech} active={true} key={index} />;
            })}
            {jobProps.techs.length > 4 && (
              <AdditionalPill
                itemsRemaining={jobProps.techs.length - 4}
                additionalItems={jobProps.techs.slice(4, jobProps.techs.length)}
              />
            )}
          </div>
        </div>
        <div className="mx-auto my-auto flex h-full flex-shrink-0 flex-row items-center justify-center gap-2 lg:mr-6 lg:ml-2 lg:flex-col lg:items-end lg:justify-center">
          <h1 className="text-center text-lg text-gray-700 lg:text-right lg:text-2xl">
            {jobProps.remote ? "Remote" : jobProps.city}
          </h1>
          {jobProps.country != "" && (
            <h1 className="text-center text-lg text-gray-700 lg:text-right lg:text-2xl">
              {jobProps.country}
            </h1>
          )}
        </div>
      </a>
    </div>
  );
}

export default job;
