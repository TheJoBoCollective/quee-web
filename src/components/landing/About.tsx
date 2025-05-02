"use client";
import React from "react";
import TiltedText  from "@/components/ui/TiltedText";
import { motion } from "framer-motion";

const About = ()  => {
  return (
    <section className="bg-[#141029] min-h-[80vh] w-full flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col items-center text-center text-white text-2xl md:text-3xl lg:text-4xl font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-6 leading-relaxed">
            <TiltedText
              text="Quee"
              color="bg-[#FF5858]"
              className="text-[#110B23]"
              rotation={5}
            />
            <span className="mx-1">lets you request songs,</span>
            <TiltedText
              text="tip"
              color="bg-[#F09819]"
              className="text-[#110B23]"
              rotation={-5}
            />
            <span className="mx-1">your</span>
          </p>

          <p className="mb-6 leading-relaxed">
            <span className="mx-1">favorite DJs, and watch your</span>
            <TiltedText
              text="requests,"
              color="bg-[#3E0F46]"
              rotation={0}
              className="text-white"
            />
            <span className="mx-1">play.</span>
          </p>

          <p className="mb-6 leading-relaxed">
            <span className="mx-1">As a DJ; engage your crowd,</span>
            <TiltedText
              text="monetize"
              color="bg-[#ACCDFF]"
              className="text-[#110B23]"
              rotation={5}
            />
            <span className="mx-1">your</span>
          </p>

          <p className="mb-6 leading-relaxed">
            <TiltedText
              text="set"
              color="bg-[#481a68]"
              rotation={-7}
              className="text-white"
            />
            <span className="mx-1">and take control of your playlist.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;