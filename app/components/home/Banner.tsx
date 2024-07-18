'use client'

import { BannerLoading } from "@/public/images";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Banner = () => {
  const [loading, setLoading] = useState(true);
  const videoRef = useRef(null) as any;

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('loadeddata', handleLoad);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('loadeddata', handleLoad);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[730px]">
      {loading && (
        <Image
          src={BannerLoading}
          alt="Loading banner"
          className="block w-full h-full object-cover absolute top-0 left-0 z-0"
          priority
          width='0'
          height='0'
          sizes='100vw'
        />
      )}
      <video
        ref={videoRef}
        className="block w-full h-full object-cover absolute top-0 left-0 z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/videos/banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex-col w-full h-full flex items-center justify-center bg-black/40">
        <div className="flex items-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-6xl text-white whitespace-nowrap font-bold">
            Devon Hunt
          </h1>
          <div className="mx-3 md:mx-8 h-16 w-0.5 bg-[#41a9b2]"></div>
          <p className="text-3xl sm:text-4xl md:text-6xl text-white whitespace-nowrap font-bold">
            MA Realtor®
          </p>
        </div>
        <p className="text-white text-3xl font-bold tracking-wider mb-16 px-16">
          I deliver the very best in all facets of{" "}
          <span className="text-[#41a9b2] whitespace-nowrap">real estate.</span>{" "}
          <br />
          Because you deserve no less.
        </p>
        <div className="flex items-center gap-5">
          <Link
            href="/contact"
            className="px-10 py-2.5 uppercase text-white border-4 border-[#78ba3b] font-bold hover:bg-[#78ba3b] duration-200"
          >
            Contact me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
