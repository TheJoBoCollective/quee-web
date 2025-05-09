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
    <section className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[602px]">
        <div className="bg-blue-100 rounded-3xl p-8 border border-blue-300">
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
                Send out a song <span> request!</span>
              </p>
            </div>

            <div className="mt-auto">
              <div className="w-32 h-12 border border-orange-400 rounded-full mb-15"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="bg-blue-100 rounded-3xl p-8">
            <div className="h-full">
              <p className="text-3xl">
                <span>Send a tip</span> to the DJ
              </p>
            </div>
          </div>

          <div className="bg-blue-100 rounded-3xl p-8">
            <div className="h-full">
              <p className="text-3xl">
                Find any <span>track</span>
              </p>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[602px]">
        <div className="bg-blue-100 rounded-3xl px-13 pt-13 border border-blue-300">
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

            <div className="mt-auto">
              <div className="w-32 h-12 border border-orange-400 rounded-full mb-15"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-100 rounded-3xl p-8 row-span-2">
            <div className="h-full">
              <p className="text-3xl">
                <span>Real</span>-time control.
              </p>
            </div>
          </div>

          <div className="bg-blue-100 rounded-3xl p-8">
            <div className="h-full">
              <p className="text-3xl">
                Manage Live Song <span>Requests</span>
              </p>
            </div>
          </div>

          <div className="bg-blue-100 rounded-3xl p-8">
            <div className="h-full">
              <p className="text-3xl">
                <span>Monetize</span> sets
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
