import React from "react";
import ChangeSection from "../components/changeSection";
import RegularHeader from "../components/regularHeader";
import Image from "next/image";

function Contact() {
  return (
    <div className="min-h-screen font-inter">
      <RegularHeader />

      {/* hero section */}
      <div className="flex min-h-screen flex-col items-center justify-evenly bg-gradient-to-r from-white/100 via-white/20 to-blue-200 p-10 lg:flex-row">
        <div>
          <h1 className="my-2 text-5xl font-bold text-gray-800">Contact Us</h1>
          <h2 className="font-regular text-2xl text-gray-800">
            Send us a message and we will get back to you!
          </h2>
          <h2 className="text-2xl text-gray-800">
            Currently this page is being built, until then, send us a message
            via{" "}
            <a className="text-blue-500 " href="https://twitter.com/DevMaxC">
              Twitter
            </a>
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

      {/* use the style of changes here */}
    </div>
  );
}

export default Contact;
