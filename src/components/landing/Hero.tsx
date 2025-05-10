import React from "react";
import Image from "next/image";
import AppleIcon from "../icons/apple";
import GooglePlay from "../icons/google-play";

const Hero = () => {

const gradient = "linear-gradient(108.13deg, rgba(255, 88, 88, 0.5) 0%, rgba(240, 152, 25, 0.5) 100%)";

  return (
    <div className="md:bg-[rgba(17,11,35,0.98)] pl-5 md:pl-24 md:pr-32 md:pt-38 flex items-start justify-between rounded-3xl">
      <div className="md:max-w-sm">
        <h1 className="text-[#F0F6FF] font-medium text-5xl md:text-6xl pb-6">
          Connect with your DJ in real-time
        </h1>
        <p className="text-xl text-[#EDE7FF] font-normal md:max-w-2xs pb-8">
          Tap in, request bangers, tip DJs, and keep the party lit
        </p>
        <div className="flex w-100 md:max-w-md gap-5 pb-38">
          <a
            style={{
              borderColor: gradient,
            }}
            className="text-[#F0F6FF] border border-solid flex py-5 px-6 rounded-[100px]"
            href=""
          >
            <AppleIcon className="w-6 h-6" />
            <p className="ml-2">App store</p>
          </a>
          <a
            style={{
              borderColor: gradient,
            }}
            className="text-[#F0F6FF] border border-solid flex py-5 px-6  rounded-[100px]"
            href=""
          >
            <GooglePlay className="w-6 h-6" />
            <p className="ml-2">Google play</p>
          </a>
        </div>
      </div>
      <div>
        <Image
          src="/phone-mockup.png"
          width={393}
          height={844}
          className="w-100"
          alt="Mockup of quee mobile search"
        />
      </div>
    </div>
  );
};

export default Hero;
