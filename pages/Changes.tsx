import React from "react";
import ChangeSection from "../components/changeSection";
import RegularHeader from "../components/regularHeader";
import Image from "next/image";

function Changes() {
  return (
    <div className="font-inter">
      <RegularHeader />

      {/* hero section */}
      <div className="mt-24 flex h-96 flex-col items-center justify-evenly bg-gradient-to-r from-white/100 via-white/20 to-blue-200 p-10 lg:flex-row">
        <div>
          <h1 className="my-2 text-5xl font-bold text-gray-800">Change Log</h1>
          <h2 className="font-regular text-2xl text-gray-800">
            See what changes we are making to the site
          </h2>
          <h2 className="font-regular text-2xl text-gray-800">
            Or follow us on{" "}
            <a href="https://twitter.com/DevMaxC" className="text-blue-500">
              Twitter
            </a>{" "}
            for updates
          </h2>
        </div>

        {/* Rounded image of the homepage "homepage.png" which rotates by 10 degrees when hovered over */}
        <div className="hidden h-min animate-pulse overflow-hidden rounded-full bg-white object-cover p-2 lg:block">
          <Image
            alt="homepage image"
            height={216}
            width={216}
            priority
            src="/logoBlue.svg"
          />
        </div>
      </div>

      {/* main content */}
      <div className=" flex flex-col space-y-8 bg-gray-100 p-8">
        <ChangeSection
          version="1.00"
          title="Launch"
          description="We are proud to announce the launch of techhired.io! Over the coming months techhired will become the once stop shop for all tech jobs! Making getting a job in tech as easy as: tap tap BOOM!"
          bulletPoints={[
            "Added main section for jobs, search bar beta, and filters",
            "Tech pill boxes now show the techs that a company is looking for",
            "Logo of the company shows with each post",
          ]}
          date="01/08/2022"
        />
        <ChangeSection
          version="1.01"
          title="Performance improvements"
          description="With lazy loading of jobs, the experience on the site should now be snappy and responsive. We are also working on a better way to filter jobs by techs"
          bulletPoints={[
            "Lazy loading for jobs",
            "Revamped job appearance",
            "Using static props to improve performance",
          ]}
          date="07/08/2022"
        />
        <ChangeSection
          version="1.02"
          title="Site stats"
          description="We can now see stats on how the site is performing. This will help us to improve the site and make it more user friendly"
          bulletPoints={[
            "Consent Manager",
            "Mixpanel Integration",
            "Easy Opt Out",
          ]}
          date="11/08/2022"
        />
      </div>
    </div>
  );
}

export default Changes;
