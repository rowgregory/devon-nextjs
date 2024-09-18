import React from "react";

const FixedBanner = ({ bgImg, title, subtitle }: any) => {
  return (
    <div className="relative w-full h-[300px] sm:h-[450px]">
      <div
        className="bg-cover bg-top bg-fixed absolute inset-0"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "140%",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 z-10">
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
