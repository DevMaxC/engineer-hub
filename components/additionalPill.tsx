import React from "react";

export interface AdditionalPillProps {
  itemsRemaining: number;
  additionalItems?: string[];
}

function additionalPill(props: AdditionalPillProps) {
  return (
    <div
      title={props.additionalItems?.join(" ")}
      className="w-fit shrink-0 rounded-full border-2 border-gray-400 bg-gray-300 py-[2px] px-2 align-middle text-sm text-gray-700 lg:text-xl"
    >
      {"+" + props.itemsRemaining}
    </div>
  );
}

export default additionalPill;
