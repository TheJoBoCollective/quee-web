import React from "react";
import Image from "next/image";
import AppleIcon from "@/components/icons/apple";
import GooglePlay from "@/components/icons/google-play";
import Vinyl from "@/components/icons/vinyl";
const Footer = () => {
  const gradient =
    "linear-gradient(108.13deg, rgba(255, 88, 88, 0.5) 0%, rgba(240, 152, 25, 0.5) 100%)";

  return (
    <footer className="bg-[#110B23] min-h-screen px-24 py-30">
      <div className="flex items-center bg-white max-w-6xl mx-auto rounded-3xl pl-20 py-6 mb-20">
        <div className="max-w-xs mr-19">
          <h1 className="text-[#1E1E1E] font-medium text-6xl pb-6">
            Tap in <br />& Turn up!
          </h1>
          <div className="flex w-100 max-w-md gap-5">
            <a
              style={{
                borderColor: gradient,
              }}
              className="text-[#1E1E1E] border border-solid flex py-4 px-6 rounded-[100px]"
              href=""
            >
              <AppleIcon className="w-6 h-6" />
              <p className="ml-2">App store</p>
            </a>
            <a
              style={{
                borderColor: gradient,
              }}
              className="text-[#1E1E1E] border border-solid flex py-4 px-6  rounded-[100px]"
              href=""
            >
              <GooglePlay className="w-6 h-6" />
              <p className="ml-2">Google play</p>
            </a>
          </div>
        </div>
        <Vinyl />
      </div>
      <section className="flex justify-between items-center border-t border-[#9F77EC4D] max-w-5xl mx-auto pt-20">
        <div className="flex items-center justify-center gap-8 border border-[#9F77EC4D] rounded-3xl bg-[#21183B]  text-white max-w-2xl py-8 px-13">
          <Image
            src="/favicon.png"
            width={64}
            height={64}
            className="w-16 h-16"
            alt="Quee logo"
          />
          <p className="text-2xl">Download Quee Today!</p>
          <div className="flex items-center gap-6">
            <div className="flex items-center justify-center border border-[#F0F6FF] rounded-full p-2 h-16 w-16">
              <AppleIcon className="w-7 h-7" />
            </div>
            <span className="flex items-center justify-center border border-[#F0F6FF] rounded-full h-16 w-16">
              <GooglePlay className="w-7 h-7" />
            </span>
          </div>
        </div>
        <ul className="text-white">
          <li className="">
            <a href="#">Terms of Service</a>
          </li>
          <li className="">
            <a href="#">Privacy Policy</a>
          </li>
          <li className="">
            <a href="#">©2025 Quee</a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
