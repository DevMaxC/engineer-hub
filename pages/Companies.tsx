import React from "react";
import ChangeSection from "../components/changeSection";
import RegularHeader from "../components/regularHeader";
import Image from "next/image";
import {
  PresentationChartLineIcon,
  PencilAltIcon,
  BadgeCheckIcon,
  ChartPieIcon,
} from "@heroicons/react/outline";

function Companies() {
  return (
    <div className="font-inter">
      <RegularHeader />

      {/* hero section */}
      <div className="mt-24 flex h-96 flex-col items-center justify-evenly bg-gradient-to-r from-white/100 via-white/20 to-blue-200 p-10 lg:flex-row">
        <div>
          <h1 className="my-2 text-5xl font-bold text-gray-800">Companies</h1>
          <h2 className="font-regular my-2 text-2xl text-gray-800">
            Sign up and get the ability to edit job posts, promote jobs and
            more!
          </h2>
          <div className="mt-4 ml-1 flex gap-4">
            <a
              href="/Login"
              className="rounded-lg bg-blue-500 px-3 py-2 text-2xl font-semibold text-white transition hover:bg-blue-600"
            >
              {" "}
              Login
            </a>
            <a
              href="/Signup"
              className="rounded-lg bg-blue-500 px-3 py-2 text-2xl font-semibold text-white transition hover:bg-blue-600"
            >
              {" "}
              Sign Up
            </a>
          </div>
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
      <div className="min-h-full bg-gray-100 p-8 text-gray-700">
        <div className="mx-auto flex w-full flex-col gap-16 space-y-8 p-5 lg:p-20 xl:w-[60%]">
          {/* Promote */}
          <div className="flex items-center gap-4 lg:gap-8">
            <div className="rounded-full bg-blue-500 p-4 text-white">
              <PresentationChartLineIcon width={64} height={64} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Promote Jobs</h1>
              <p className="text-xl">
                Promote your job posts and get more applicants for your jobs. We
                help you fill your roles faster.
              </p>
            </div>
          </div>

          {/* Edit Posts */}
          <div className="flex items-center gap-4 lg:gap-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Edit Posts</h1>
              <p className="text-xl">
                Sometimes we dont get it 100% correct, sign up to be able to
                edit your posts, company name, company logo and more.
              </p>
            </div>

            <div className="rounded-full bg-blue-500 p-4 text-white">
              <PencilAltIcon width={64} height={64} />
            </div>
          </div>

          {/* Get verified */}
          <div className="flex items-center gap-4 lg:gap-8">
            <div className="rounded-full bg-blue-500 p-4 text-white">
              <BadgeCheckIcon width={64} height={64} />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-gray-900">Get Verified</h1>
              <p className="text-xl">
                Verification helps users know that the jobs they are seeing are
                legit. Users are more likely to click a job from a trusted site.
              </p>
            </div>
          </div>

          {/* View Stats */}
          <div className="flex items-center gap-4 lg:gap-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">View Stats</h1>
              <p className="text-xl">
                See how your jobs are appealing to devs day by day, check how
                many have clicked on your jobs. Which jobs are most appealing
                and which are hardest to fill.
              </p>
            </div>

            <div className="rounded-full bg-blue-500 p-4 text-white">
              <ChartPieIcon width={64} height={64} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Companies;
