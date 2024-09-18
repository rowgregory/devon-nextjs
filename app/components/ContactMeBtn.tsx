import { DiamondUpholstery } from "@/public/images";
import Link from "next/link";
import React from "react";

const ContactMeBtn = () => {
  return (
    <Link
      href="/contact"
      style={{ backgroundImage: `url(${DiamondUpholstery.src})` }}
      className="font-bold tracking-wide text-center bg-center px-10 py-2.5 uppercase text-white bg-[#f067a6] duration-200 hover:bg-black hover:text-[#f067a6]"
    >
      Contact me
    </Link>
  );
};

export default ContactMeBtn;
