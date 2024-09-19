"use client";

import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

const FixedBanner = ({ bgImg, title, subtitle }: any) => {
  return (
    <ParallaxBanner className="h-[450px]">
      <ParallaxBannerLayer
        image={bgImg}
        speed={-40}
        className="bg-no-repeat fixed-banner"
        style={{}}
      />
      <ParallaxBannerLayer>
        <div className="absolute bg-black/50 inset-0 flex flex-col items-center justify-center p-4 sm:p-6 z-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-center">
            {title}
          </h1>
          <h4 className="pt-4 sm:pt-7 pb-4 sm:pb-7 font-bold text-base sm:text-lg text-white tracking-wider text-center">
            {subtitle}
          </h4>
        </div>
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
};

export default FixedBanner;
