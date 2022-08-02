import React from "react";

export default function Custom404() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-blue-500 text-white">
      <h1 className="text-4xl font-bold">404 - Page Not found</h1>
      <h1 className="text-2xl font-thin">This website is under devellopment</h1>
      <h1 className="text-2xl  font-thin">we plan to add this soon :)</h1>
      <a
        className="mt-4 rounded-lg bg-white px-2 font-medium text-gray-800 hover:text-gray-600"
        href="/"
      >
        Go Back
      </a>
      <h1 className="mt-8 text-2xl  font-thin">For now - follow me on</h1>
      <h1 className="mt-2 text-2xl  font-thin">
        <a
          className="rounded-lg bg-white px-2 font-medium text-blue-600 hover:text-blue-400"
          href="https://twitter.com/DevMaxC"
        >
          Twitter
        </a>
        <span className="mx-2">or</span>
        <a
          className="rounded-lg bg-white px-2 font-medium text-gray-800 hover:text-gray-600"
          href="https://github.com/DevMaxC"
        >
          GitHub
        </a>
      </h1>
    </div>
  );
}
