"use client";
import Image from "next/image";
import React, { useState } from "react";
import ToggleButton from "@/components/ui/ToggleButton";

const HowItWorks = () => {
  const [currentView, setCurrentView] = useState(0);
  return (
    <div className="bg-white flex flex-col items-center py-8 md:py-30 px-6 md:px-24 md:min-h-screen mx-auto xl:max-w-[1280px] 2xl:max-w-[1440px]">
      <ToggleButton
        options={["DJ something ", "User something"]}
        className="mb-15"
        onChange={(value) => {
          setCurrentView(value);
        }}
      />
      <h3 className="text-5xl font-medium pb-6">
        Turn your setlist into a paycheck
      </h3>
      <p className="text-xl pb-7 max-w-xl text-center">
        Get paid to play, manage live song requests, and keep the crowd
        hyped—all from one app. No more awkward requests, just smooth
        transactions and real-time control.
      </p>
      <div className="container mx-auto">
        {currentView === 0 ? <DJHowItWorks /> : <UserHowItWorks />}
      </div>
    </div>
  );
};

export default HowItWorks;

const UserHowItWorks = () => {
  return (
    <section className="container mx-auto h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-200 rounded-3xl px-6 md:px-13 pt-13 border border-blue-300">
          <div className="h-full flex flex-col justify-between">
            <div className="md:w-3/5">
              <Image
                src="/favicon.png"
                width={42}
                height={42}
                className="w-10 h-10 mb-8"
                alt="Quee logo"
              />
              <p className="w-full text-2xl md:text-4xl mb-4 md:mb-0">
                <span className="text-[#1E1E1E]/60">Send out a song </span>
                <br className="hidden md:block" />
                request!
              </p>
            </div>

            <div className="mt-auto flex flex-col md:flex-row md:justify-between md:items-end">
              <button className="px-6 py-4 mb-5 md:mb-15 border border-orange-400 rounded-full cursor-pointer">
                Get the app
              </button>
              <Image
                src="/user-request.png"
                width={297}
                height={615}
                className=""
                alt="Receive song requests from users"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 grid-rows-2 gap-6">
          <div className="bg-blue-200 rounded-3xl px-6 md:px-10 pb-10">
            <div className="flex flex-col md:flex-row h-full">
              <Image
                src="/user-tip.png"
                width={312}
                height={646}
                className=""
                alt=""
              />
              <div className="flex items-end mt-5 md:mt-0 md:pl-10">
                <p className="text-3xl">
                  <span className="text-[#1E1E1E]/60">Send a tip</span>
                  <br className="hidden md:block" /> to the DJ
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-200 rounded-3xl">
            <div className="h-full flex flex-col md:flex-row md:items-end justify-between">
              <p className="text-3xl pl-6 md:pl-10 pr-10 md:pr-0 pb-10 pt-10 md:pt-0 text-center md:text-left">
                Find <br className="hidden md:block" />
                any<span className="text-[#1E1E1E]/60"> track</span>
              </p>
              <Image
                src="/user-find-track.png"
                width={360}
                height={342}
                className=""
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const DJHowItWorks = () => {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-200 rounded-3xl px-6 md:px-13 pt-13 border border-blue-300">
          <div className="h-full flex flex-col justify-between">
            <div className="md:w-3/5">
              <Image
                src="/favicon.png"
                width={42}
                height={42}
                className="w-10 h-10 mb-8"
                alt="Quee logo"
              />
              <p className="w-full text-2xl md:text-4xl mb-4 md:mb-0">
                No more awkward requests
              </p>
            </div>

            <div className="mt-auto flex flex-col md:flex-row md:justify-between md:items-end">
              <button className="px-6 py-4 mb-5 md:mb-15 border border-orange-400 rounded-full cursor-pointer">
                Get the app
              </button>
              <Image
                src="/dj-request.png"
                width={297}
                height={615}
                className=""
                alt="Receive song requests from users"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-200 rounded-3xl row-span-2">
            <div className="h-full flex flex-col justify-between">
              <Image
                src="/dj-accept-request.png"
                width={307}
                height={646}
                className=" pr-9"
                alt="have fun with your audience"
              />
              <p className="text-3xl p-10">
                <span className="text-[#1E1E1E]/60">Real</span>-time control.
              </p>
            </div>
          </div>

          <div className="bg-blue-200 rounded-3xl p-10 h-[289px]">
            <div className="h-full">
              <p className="text-3xl w-40">
                Manage Live Song
                <span className="text-[#1E1E1E]/60">
                  <br className="hidden md:block" />
                   Requests
                </span>
              </p>
            </div>
          </div>

          <div className="bg-blue-200 rounded-3xl h-full">
            <div className="flex justify-end">
              <Image
                src="/dj-monetize.png"
                width={182}
                height={180}
                className=""
                alt="Monetize your set"
              />
            </div>

            <p className="text-3xl pb-10 px-10">
              <span className="text-[#1E1E1E]/60">
                Monetize  
                <br className="hidden md:block" />
              </span>
                sets
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
