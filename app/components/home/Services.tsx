import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faChevronRight,
  faHouse,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const servicesData = [
  {
    title: "Sell Property",
    desc: "Proven ability to market and sell properties through a customized, strategic plan, resulting in clients netting top dollar.",
    icon: faHouse,
  },
  {
    title: "Buy Property",
    desc: "Expertise in guiding clients (including first time buyers) through the process with ease.",
    icon: faBuilding,
  },
  {
    title: "Rent Property",
    desc: "Helping those who seek alternatives to owning, find the best option.",
    icon: faKey,
  },
];

const Services = () => {
  return (
    <div className="grid grid-cols-12 max-w-[850px] w-full mx-auto gap-5 px-3 relative z-10 top-[-70px]">
      {servicesData.map((obj: any, i: number) => (
        <div
          key={i}
          className="col-span-12 md:col-span-4 gap-y-4 flex flex-col pt-10 pb-6 px-6 bg-white shadow-xl border-b-4 border-[#41a9b2]"
        >
          <FontAwesomeIcon
            icon={obj.icon}
            className="w-6 h-6 self-end text-[#78ba3b] mb-5"
          />
          <h1 className="font-bold text-lg">{obj.title}</h1>
          <div className="flex justify-between flex-col h-full">
            <p className="font-light mb-5">{obj.desc}</p>
            <Link className="text-sm font-light flex items-center" href="/services">
              View Service <FontAwesomeIcon icon={faChevronRight} className='ml-1 text-gray-500 text-sm' />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
