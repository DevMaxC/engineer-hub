import React from "react";

export interface pillSeniorityProps {
  seniority: string;
}

function pillSeniority(props: pillSeniorityProps) {
  const correctColours = [
    {
      seniority: "Intern",
      background: "#FFD500",
      contrast: "black",
    },
    {
      seniority: "Junior",
      background: "#F7BB00",
      contrast: "black",
    },
    {
      seniority: "PHD",
      background: "#EEA000",
      contrast: "black",
    },
    {
      seniority: "Senior",
      background: "#E68600",
      contrast: "white",
    },
    {
      seniority: "Staff",
      background: "#DD6B00",
      contrast: "white",
    },
    {
      seniority: "Senior Staff",
      background: "#D55100",
      contrast: "white",
    },
    {
      seniority: "Director",
      background: "#CC3600",
      contrast: "white",
    },
    {
      seniority: "Senior Director",
      background: "#C31B00",
      contrast: "white",
    },
    {
      seniority: "Fellow",
      background: "#BA0000",
      contrast: "white",
    },
  ];

  if (props.seniority === "Intern") {
    return (
      <div
        className={`w-fit shrink-0 rounded-full border-2 bg-yellow-500 py-[2px] px-2 align-middle text-sm text-black lg:text-lg`}
      >
        {props.seniority}
      </div>
    );
  }
  if (props.seniority === "Junior") {
    return (
      <div
        className={`w-fit shrink-0 rounded-full border-2 bg-red-500 py-[2px] px-2 align-middle text-sm text-white lg:text-lg`}
      >
        {props.seniority}
      </div>
    );
  }
  if (props.seniority === "PHD") {
    return (
      <div
        className={`w-fit shrink-0 rounded-full border-2 bg-green-500 py-[2px] px-2 align-middle text-sm text-white lg:text-lg`}
      >
        {props.seniority}
      </div>
    );
  }
  if (props.seniority === "Senior") {
    return (
      <div
        className={`w-fit shrink-0 rounded-full border-2 bg-orange-500 py-[2px] px-2 align-middle text-sm text-white lg:text-lg`}
      >
        {props.seniority}
      </div>
    );
  }
  if (props.seniority === "Staff") {
    return (
      <div
        className={`w-fit shrink-0 rounded-full border-2 bg-purple-600 py-[2px] px-2 align-middle text-sm text-white lg:text-lg`}
      >
        {props.seniority}
      </div>
    );
  }
  if (props.seniority === "Senior Staff") {
    return (
      <div
        className={`w-fit shrink-0 rounded-full border-2 bg-lime-600 py-[2px] px-2 align-middle text-sm text-white lg:text-lg`}
      >
        {props.seniority}
      </div>
    );
  }
  if (props.seniority === "Director") {
    return (
      <div
        className={`w-fit shrink-0 rounded-full border-2 bg-cyan-600 py-[2px] px-2 align-middle text-sm text-white lg:text-lg`}
      >
        {props.seniority}
      </div>
    );
  }
  if (props.seniority === "Senior Director") {
    return (
      <div
        className={`w-fit shrink-0 rounded-full border-2 bg-indigo-600 py-[2px] px-2 align-middle text-sm text-white lg:text-lg`}
      >
        {props.seniority}
      </div>
    );
  }
  if (props.seniority === "Fellow") {
    return (
      <div
        className={`w-fit shrink-0 rounded-full border-2 bg-black py-[2px] px-2 align-middle text-sm text-white lg:text-lg`}
      >
        {props.seniority}
      </div>
    );
  }

  return (
    <div className="w-fit shrink-0 rounded-full bg-yellow-400 py-[2px] px-2 align-middle text-sm text-gray-700 outline outline-yellow-500 lg:text-lg">
      {props.seniority}
    </div>
  );
}

export default pillSeniority;
