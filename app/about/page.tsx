import React from "react";
import QuoteAndImage from "../components/home/QuoteAndImage";
import Acknowledgements from "../components/home/Acknowledgements";
import FixedBanner from "../components/FixedBanner";

const About = () => {
  return (
    <div>
      <FixedBanner
        bgImg="/images/boston-skyline-river.jpg"
        title="Hello, I'm Devon Hunt"
        subtitle="Realtor® you can trust."
      />
      <div className="bg-white w-full relative z-10">
        <div className="max-w-screen-md w-full mx-auto pt-10">
          <QuoteAndImage />
        </div>
        <Acknowledgements />
      </div>
    </div>
  );
};

export default About;
