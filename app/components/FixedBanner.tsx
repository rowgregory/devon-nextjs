import React from "react";

const FixedBanner = ({ bgImg, title, subtitle }: any) => {
  return (
    <div className="relative w-full h-[450px]">
      <div
        className="bg-center bg-cover bg-fixed absolute inset-0"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h1 className="font-bold text-5xl text-white text-center">{title}</h1>
        <h4 className="pt-7 lg:pt-9 pb-7 font-bold text-lg text-white tracking-wider">
          {subtitle}
        </h4>
      </div>
    </div>
  );
};

export default FixedBanner;
