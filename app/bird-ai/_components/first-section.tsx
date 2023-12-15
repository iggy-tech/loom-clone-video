"use client";

import { useEffect } from "react";

const FirstSection = () => {
  return (
    <div className="md:py-40 bg-[#eff0ff]">
      <div className="flex flex-col justify-center space-y-4">
        <div className="pt-20 md:pt-0 text-5xl md:text-7xl flex md:justify-center font-medium px-10 text-[#2b1c50]">
          Introducing Bird AI
        </div>
        <p
          className="
            text-xl
            md:text-3xl
            font-light
            md:text-center
            md:w-2/3
            mx-auto
            px-10
            md:px-0
            text-[#3d2e7c]
            "
        >
          Record better presentations, faster feedback, and smoother hand-offs
          with Bird Ai. So you can be more productive, wherever you work.
        </p>

        <div className="flex gap-4 md:justify-center px-10 py-4">
          <div className="flex">
            <div
              className="
                    text-white
                    px-6
                    justify-between
                    text-md
                    font-light
                    rounded-[40px]
                    border-4
                    border-indigo-400/90
                    md:py-4
                    bg-[#565add]
                    hover:scale-110
                    transition-all
                    duration-300
                    shadow-md
                    hover:shadow-indigo-300
                    "
            >
              <div className="flex items-center justify-center">
                <div className="text-lg py-4 md:py-0">Get Bird AI</div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:pt-20 w-5/6 mx-auto md:px-10">
          <video
            className="
                rounded-[40px]
                 shadow-indigo-400 
                 shadow-2xl 
                 xl:w-5/6
                  xl:mx-auto"
            autoPlay
            muted
            loop
          >
            <source src="/videos/hero-1.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
