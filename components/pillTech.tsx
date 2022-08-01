import React from "react";

interface pillTechProps {
  active: boolean;
  techName: string;
}

function pillTech(props: pillTechProps) {
  return (
    <div className="w-fit shrink-0 rounded-full border-2 bg-blue-600 py-1 px-2 align-middle text-sm text-white lg:text-xl">
      {props.techName}
    </div>
  );
}

export default pillTech;
