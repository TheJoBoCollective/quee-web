"use client";
import Image from "next/image";
import React, { useState } from "react";
import ToggleButton from "@/components/ui/ToggleButton";

const HowItWorks = () => {
  const [currentView, setCurrentView] = useState(0);
  return (
    <div className="bg-white flex flex-col items-center py-30 px-24 min-h-screen">
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
        <div className="bg-blue-200 rounded-3xl px-13 pt-13 border border-blue-300">
          <div className="h-full flex flex-col justify-between">
            <div className="w-3/5">
              <Image
                src="/favicon.png"
                width={42}
                height={42}
                className="w-10 h-10 mb-8"
                alt="Quee logo"
              />
              <p className="w-full text-4xl">
                <span className="text-[#1E1E1E]/60">Send out a song</span>{" "}
                <br />
                request!
              </p>
            </div>

            <div className="mt-auto flex justify-between items-end">
              <button className="px-6 py-4 mb-15 border border-orange-400 rounded-full cursor-pointer">
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
          <div className="bg-blue-200 rounded-3xl px-10 pb-10">
            <div className="flex h-full">
              <Image
                src="/user-tip.png"
                width={312}
                height={646}
                className=""
                alt=""
              />
              <div className="flex items-end pl-10">
                <p className="text-3xl">
                  <span className="text-[#1E1E1E]/60">Send a tip</span>
                  <br /> to the DJ
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-200 rounded-3xl">
            <div className="h-full flex items-end justify-between">
              <p className="text-3xl px-10 pb-10">
                Find <br />
                any<span className="text-[#1E1E1E]/60"> track</span>
              </p>
              <Image
                src="/user-find-track.png"
                width={312}
                height={373}
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
        <div className="bg-blue-200 rounded-3xl px-13 pt-13 border border-blue-300">
          <div className="h-full flex flex-col justify-between">
            <div className="w-3/5">
              <Image
                src="/favicon.png"
                width={42}
                height={42}
                className="w-10 h-10 mb-8"
                alt="Quee logo"
              />
              <p className="w-full text-4xl">No more awkward requests</p>
            </div>

            <div className="mt-auto flex justify-between items-end">
              <button className="px-6 py-4 mb-15 border border-orange-400 rounded-full cursor-pointer">
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

        <div className="grid grid-cols-2 gap-6">
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
                  <br />
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
                <br />
              </span>
              sets
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
