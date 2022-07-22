import React from "react";
import { cardProps } from "./CompanyCard";

export type companyProps = {
  logoSrc: string;
  companyName: string;
  companyDescription: string;
  positionsAvailable: number;
  url: string;
  tags?: string[];
};

function FeaturedCompany({
  logoSrc,
  companyName,
  companyDescription,
  positionsAvailable,
  url,
  tags = [],
}: companyProps) {
  return (
    <div className="relative aspect-video w-full rounded-xl border border-purple-300 bg-white p-4 shadow">
      <h1 className="mr-12 text-xl font-semibold">{companyName}</h1>
      <h2 className="mt-4 truncate text-lg">{companyDescription}</h2>
      <a
        className="absolute bottom-2 right-4 text-lg text-purple-500 visited:text-purple-900"
        href={url}
      >
        See {positionsAvailable} Jobs
      </a>
      <div className="absolute -top-4 -right-4 rounded-full border border-purple-300 bg-white p-3 ">
        <img className="aspect-square h-8 w-8 " src={logoSrc} />
      </div>
    </div>
  );
}

export default FeaturedCompany;
