import React from "react";
import ChangeSection from "../components/changeSection";
import RegularHeader from "../components/regularHeader";
import Image from "next/image";

function About() {
  return (
    <div className="font-inter">
      <RegularHeader />
      <div className="mx-0 mt-24 w-full p-10 md:mx-auto md:w-[50%]">
        <h1 className="text-4xl font-semibold text-gray-700">About</h1>
        <p className="my-2 text-gray-700">
          TechHired.io is a platform to enable jobseekers to find jobs as fast
          and easily as possible. We search hundreads of websites to find high
          quality jobs, we do the hard work for you, finding out the
          technologies you would use, this way you can spend less time searching
          for a job.
        </p>
        <p className="my-2 text-gray-700">
          We guarentee no headhunters and no dead jobs (WIP).
        </p>
        <p className="my-2 text-gray-700">
          The way we will make money is by promoting some jobs to you. These
          jobs are always relevant to what you are looking for and would have
          appeared anyway but further down the site. These jobs will never go
          against our principle against headhunters.
        </p>
        <p className="my-2 text-gray-700">
          Headhunters never tell you what company you are really applying to,
          and take a fee based upon your salary, our belief is that this money
          should go to you, not some headhunter.
        </p>
        <p className="my-2 text-gray-700">
          We dont care where you apply for the job, were not here to take your
          info and make you login, have a browse of the jobs available and then
          apply for the job on the respective company's website.
        </p>
      </div>
    </div>
  );
}

export default About;
