import React from "react";
import servicesData from "@/public/data/servicesData";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="grid grid-cols-12 max-w-[850px] w-full mx-auto gap-5 px-3 relative z-10 top-[-70px]">
      {servicesData.map((obj, i: number) => (
        <ServiceCard key={i} obj={obj} />
      ))}
    </div>
  );
};

export default Services;
