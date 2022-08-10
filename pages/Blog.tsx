import React from "react";
import ChangeSection from "../components/changeSection";
import RegularHeader from "../components/regularHeader";
import Image from "next/image";

function Blog() {
  return (
    <div className="font-inter">
      <RegularHeader />

      {/* hero section */}
      <div className="mt-24 flex h-96 flex-col items-center justify-evenly bg-gradient-to-r from-white/100 via-white/20 to-blue-200 lg:flex-row">
        <div>
          <h1 className="my-2 text-5xl font-bold text-gray-800">Blog</h1>
          <h2 className="font-regular text-2xl text-gray-800">
            Read our blog for posts on the latest trends in the tech!
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
      <div className=" flex flex-col space-y-8 bg-white p-8 text-xl">
        <h1 className="text-center text-3xl font-bold">COMING SOON!</h1>
      </div>
    </div>
  );
}

export default Blog;
