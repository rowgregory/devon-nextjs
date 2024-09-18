import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import "../../animations.css";

const ServiceCard = ({ obj }: any) => {
  return (
    <Link
      href="/services"
      className="relative overflow-hidden group col-span-12 md:col-span-4 gap-y-4 flex flex-col pt-10 pb-6 px-6 bg-white shadow-xl border-b-4 border-[#f067a6] hover:border-black"
    >
      <div className="absolute bottom-[-100px] left-[-100px] w-4 h-4 bg-[#f067a6] rounded-full group-hover:w-[500px] group-hover:h-[500px] transition-all duration-500 ease-in-out transform origin-center"></div>
      <FontAwesomeIcon
        icon={obj.icon}
        className="w-6 h-6 self-end text-[#f067a6] delay-150 group-hover:text-black duration-200 mb-5 relative z-10"
      />
      <h1 className="font-bold text-xl relative z-10 delay-150 group-hover:text-white">
        {obj.title}
      </h1>
      <div className="flex justify-between flex-col h-full relative z-10">
        <p className="font-light mb-5">{obj.desc}</p>
        <span className="text-xs font-bold flex items-center text-black group-hover:text-white delay-150 uppercase">
          View Service{" "}
          <FontAwesomeIcon
            icon={faChevronRight}
            className="ml-1 text-gray-500 text-sm group-hover:text-white group-hover:animate-bounce-horizontal duration-700"
          />
        </span>
      </div>
    </Link>
  );
};

export default ServiceCard;
