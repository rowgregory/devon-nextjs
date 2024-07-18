import { DeveloperBy, Logo } from "@/public/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { usePathname } from "next/navigation";
import Picture from "./elements/Picture";
import {
  faEnvelope,
  faHouse,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const pathname = usePathname();
  const path = pathname.split("/")[1];

  return (
    <footer
      className={`w-full bg-zinc-50 mx-auto ${["admin", "auth"].includes(path) ? "hidden" : "block"
        }`}
    >
      <div className=' px-3 pt-12 pb-5 max-w-screen-xl mx-auto'>
        <div className="flex items-center justify-between pb-6">
          <Image
            onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
            src={Logo}
            alt="Devon Hunt - Nest Forward"
            width="0"
            height="0"
            sizes="100vw"
            className="w-60"
          />
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              onClick={() =>
                window.open("https://www.facebook.com/devondhunt", "_blank")
              }
              icon={faFacebook}
              className="text-[#41a9b2] w-8 h-8 cursor-pointer"
            />
            <FontAwesomeIcon
              onClick={() =>
                window.open("https://www.instagram.com/devondhunt/", "_blank")
              }
              icon={faInstagram}
              className="text-[#41a9b2] w-8 h-8 cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-col mt-5 mb-2 gap-y-3">
          <p className="font-semibold flex items-center text-gray-700">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-[#78ba3b] mr-1 -rotate-90"
            />
            +1 (978) 818 5303
          </p>
          <p className="font-semibold flex items-center text-gray-700">
            <FontAwesomeIcon icon={faEnvelope} className="text-[#78ba3b] mr-1" />
            devon@nestforward.com
          </p>
          <p className="font-semibold text-gray-700 flex items-center">
            <FontAwesomeIcon icon={faHouse} className="text-[#78ba3b] mr-1" />
            105 Charter St, Boston 02113
          </p>
        </div>
      </div>
      <div
        onClick={() => window.open("https://www.sqysh.io", "_blank")}
        className="flex items-center justify-center bg-black text-xs text-white font-semibold cursor-pointer py-1.5"
      >
        Developed by
        <Picture src={DeveloperBy} alt="Sqysh.io" className="w-28 ml-1.5" />
      </div>
    </footer>
  );
};

export default Footer;
