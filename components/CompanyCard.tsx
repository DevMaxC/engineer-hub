import React from "react";
import Image from "next/image";

export type cardProps = {
  logoSrc: string;
  companyName: string;
  jobtitle: string;
  jobdesc: string;
  url: string;
  tags?: string[];
};

function CompanyCard({
  logoSrc,
  companyName,
  jobtitle,
  jobdesc,
  url,
  tags = [],
}: cardProps) {
  return (
    <div className="relative aspect-video max-h-full min-h-full w-96 rounded-xl border border-purple-300 bg-white p-4 shadow shadow-purple-300">
      <h1 className="mr-12 text-xl font-semibold">
        {jobtitle + " at " + companyName}
      </h1>
      <div className="max-h-32 overflow-hidden">
        <h2 className="mt-4 text-lg">{jobdesc}</h2>
      </div>

      <a
        className="absolute bottom-2 right-4 text-lg text-purple-500 visited:text-purple-900"
        href={url}
      >
        More Info
      </a>
      <div className="absolute -top-4 -right-4 rounded-full border border-purple-300 bg-white p-3 ">
        <img className="aspect-square h-8 w-8 " src={logoSrc} />
      </div>
    </div>
  );
}

export default CompanyCard;
