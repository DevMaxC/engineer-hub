import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { XIcon } from "@heroicons/react/outline";
import { setCookie, getCookie } from "cookies-next";

interface Props {
  consentSetter: Dispatch<SetStateAction<boolean | undefined>>;
}
function cookieConsent({ consentSetter }: Props) {
  const [manageDialogueShowing, setManageDialogueShowing] = useState(false);

  useEffect(() => {
    //expire cookie after 1 month
    // setCookie("myCookieName", "myCookieValue", {
    //   expires: new Date(Date.now() + 60 * 60 * 24 * 30),
    // });
  }, []);
  return (
    <div>
      <div className="fixed bottom-0 flex min-h-fit w-full items-center justify-center bg-blue-600 px-5 py-5 text-white lg:px-[20%]">
        <div className="w-full lg:w-[40%]">
          <h1 className="text-xl font-bold">Cookies</h1>
          <h2>
            We use some cookies to see how the site is doing, dont worry, this
            data is just for us and will never be sold.
          </h2>
        </div>
        <div className="space-x-2 space-y-2 font-inter font-bold">
          <button
            onClick={() => {
              setManageDialogueShowing(true);
            }}
            className="rounded-lg bg-blue-500 p-2 transition-colors hover:bg-blue-400"
          >
            Manage Cookies
          </button>
          <button
            onClick={() => {
              consentSetter(true);
            }}
            className="rounded-lg bg-white p-2 text-black transition-colors hover:bg-gray-300"
          >
            Accept Cookies
          </button>
        </div>
      </div>

      {/* dialogue area for managing cookies */}
      {manageDialogueShowing && (
        <div className="fixed bottom-0 left-0 z-50 h-screen w-screen bg-gray-900/40">
          <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 bg-white">
            {/* exit button */}
            <button
              className="absolute top-2 right-2 rounded-full p-1 "
              onClick={() => {
                setManageDialogueShowing(false);
              }}
            >
              <XIcon width={32} height={32} className="fill-black" />
            </button>

            {/* dialogue area */}
            <div className="flex h-full w-full flex-col items-center justify-between px-5 py-5 text-black">
              <div>
                <h1 className="text-2xl font-bold">Why we use cookies?</h1>
                <h2 className="">
                  We use cookies to detect things like: How many results you are
                  loading, if the page is running slow and where our most
                  popular locations are. This data helps us improve our service,
                  for instance if we have a lot of users in the USA we may focus
                  on getting more jobs for that region.
                </h2>
              </div>

              <div className="space-x-2">
                <button
                  onClick={() => {
                    consentSetter(false);
                  }}
                  className="rounded-lg bg-gray-500 p-2 text-white"
                >
                  Reject Tracking Cookies
                </button>
                <button
                  onClick={() => {
                    consentSetter(true);
                  }}
                  className="rounded-lg bg-blue-500 p-2 text-white"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default cookieConsent;
