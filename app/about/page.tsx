import { AboutBg } from '@/public/images';
import React from "react";
import QuoteAndImage from '../components/home/QuoteAndImage';
import Acknowledgements from '../components/home/Acknowledgements';

const About = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${AboutBg.src})` }}
        className="bg-center bg-cover fixed top-0 left-0 w-full h-[450px] z-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="absolute inset-0 flex flex-col items-center justify-center mt-20">
          <h1 className="font-bold text-4xl md:text-5xl text-white text-center">Hello, I&apos;m Devon Hunt</h1>
          <h4 className="pt-7 md:pt-9 pb-7 font-bold text-lg text-white tracking-wider text-center px-3">
            Realtor® you can trust.
          </h4>
        </div>
      </div>
      <div className="bg-white w-full relative z-10">
        <div className="max-w-screen-sm w-full mx-auto mt-[356px] pt-10">
          <QuoteAndImage />
        </div>
        <Acknowledgements />
      </div>
    </div>
  );
};

export default About;
