import React, { useState } from "react";
import CompanyCard, { cardProps } from "./CompanyCard";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/outline";

type cardList = { allCards: cardProps[]; title: string };

function latest({ allCards, title }: cardList) {
  const [page, setPage] = useState(0);
  return (
    <div className="relative overflow-hidden">
      <h1 className="text-2xl">{title}</h1>
      <ul className="mx-20 flex shrink-0 overflow-hidden pt-5 pb-2">
        {allCards.map(function (item, i) {
          return (
            <div
              style={{ transform: `translate( ${-416 * page}px, 0px)` }}
              key={i}
              className="mx-4 transition-all"
            >
              <CompanyCard
                logoSrc={item.logoSrc}
                companyName={item.companyName}
                jobtitle={item.jobtitle}
                jobdesc={item.jobdesc}
                url={item.url}
                tags={item.tags}
              />
            </div>
          );
        })}
      </ul>
      <button
        className="absolute right-0 top-1/2 aspect-square w-16 rounded-full border border-purple-300 bg-white p-4 text-slate-700"
        onClick={() => {
          if (page < allCards.length - 4) {
            setPage(page + 1);
          } else {
            setPage(0);
          }
        }}
      >
        <ArrowRightIcon />
      </button>
      <button
        className="absolute left-0 top-1/2 aspect-square w-16 rounded-full border border-purple-300 bg-white p-4 text-slate-700"
        onClick={() => {
          if (page < 0) {
            setPage(page - 1);
          } else {
            setPage(0);
          }
        }}
      >
        <ArrowLeftIcon />
      </button>
    </div>
  );
}

export default latest;
