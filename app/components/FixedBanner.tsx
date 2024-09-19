"use client";

import React from "react";
import Picture from "./common/Picture";

const FixedBanner = ({ bgImg, title, subtitle }: any) => {
  return (
    <div className="relative h-[300px] md:h-[500px]">
      <Picture
        src={bgImg}
        alt=""
        className="h-full object-cover w-full"
        priority={true}
      />

      <div className="absolute bg-black/50 inset-0 flex flex-col items-center justify-center p-4 sm:p-6 z-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-white text-center">
          {title}
        </h1>
        <h4 className="pt-4 sm:pt-7 pb-4 sm:pb-7 font-bold text-base sm:text-lg text-white tracking-wider text-center">
          {subtitle}
        </h4>
      </div>
    </div>
  );
};

export default FixedBanner;
