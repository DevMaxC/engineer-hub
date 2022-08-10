import React from "react";

interface ChangeSectionProps {
  version: string;
  title: string;
  description: string;
  bulletPoints: string[];
}

function changeSection({
  version,
  title,
  description,
  bulletPoints,
}: ChangeSectionProps) {
  return (
    <div className="w-full rounded-md bg-blue-500 p-5  text-white">
      <h1 className="mb-4 text-2xl">
        Version {version} - <span className="font-semibold">{title}</span>
      </h1>
      <h2 className="my-2">{description}</h2>
      <h1 className="mt-2 text-xl font-medium">Whats New?</h1>
      <ul className="list-inside list-disc">
        {bulletPoints.map((bulletPoint, index) => (
          <li key={index}>{bulletPoint}</li>
        ))}
      </ul>
    </div>
  );
}

export default changeSection;
