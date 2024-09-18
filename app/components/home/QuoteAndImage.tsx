import React from "react";
import Link from "next/link";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DiamondUpholstery } from "@/public/images";
import Picture from "../common/Picture";

const QuoteAndImage = () => {
  return (
    <div className="grid grid-cols-12 max-w-screen-md w-full mt-28 md:my-48 gap-6 md:gap-12 px-3">
      <div className="col-span-12 md:col-start-2 md:col-span-7 flex flex-col">
        <h1 className="font-semibold text-3xl tracking-wide mb-10">
          I will help you in every way possible to list or locate your next
          residence.
        </h1>
        <p className="mb-9">
          Since 2020, I have assisted over 50+ customers in realizing their real
          estate goals. I provide customers with a personalized experience for
          selling, purchasing, and renting properties, as well as assistance in
          obtaining a home loan, with complete transparency and flawless
          service.
        </p>
        <Link
          href="/contact"
          style={{ backgroundImage: `url(${DiamondUpholstery.src})` }}
          className="font-bold tracking-wide text-center bg-center px-10 py-2.5 uppercase text-white bg-[#f067a6] duration-200 hover:bg-black hover:text-[#f067a6]"
        >
          Contact me
        </Link>
        <div className="flex items-center justify-between mt-8">
          <p className="font-semibold flex items-center">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-[#f067a6] mr-1 -rotate-90"
            />
            +1 (978) 818 5303
          </p>
          <p className="font-semibold flex items-center">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-[#f067a6] mr-1"
            />
            devon@thepropernest.com
          </p>
        </div>
      </div>
      <div className="relative w-[226px] hidden md:block">
        <Picture
          src="/images/devon-3-no-bg.png"
          alt="Devon Hunt"
          className="col-span-4 md:col-span-5 h-[800px] absolute object-cover z-0 w-full"
          priority={false}
        />
      </div>
      <div className="col-span-8 col-start-3 md:hidden mt-10">
        <Picture
          src="/images/devon-no-bg.png"
          alt="Devon Hunt"
          className="aspect-spare object-contain z-0"
          priority={false}
        />
      </div>
    </div>
  );
};

export default QuoteAndImage;
