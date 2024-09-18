import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { usePathname } from "next/navigation";
import {
  faEnvelope,
  faHouse,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Picture from "./common/Picture";
import socialMediaIconsData from "@/public/data/socialmediaIconsData";

const Footer = () => {
  const pathname = usePathname();
  const path = pathname.split("/")[1];

  return (
    <footer
      className={`w-full bg-zinc-50 mx-auto ${
        ["admin", "auth"].includes(path) ? "hidden" : "block"
      }`}
    >
      <div className=" px-3 pt-12 pb-5 max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between pb-6">
          <span onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}>
            <Picture
              src="/images/tpn/tpn-logo-black-text-no-bg.png"
              alt="The Proper Nest"
              className="w-60"
              priority={false}
            />
          </span>
          <div className="flex items-center gap-2">
            {socialMediaIconsData.map((obj, i) => (
              <div
                key={i}
                onClick={() => window.open(obj.linkKey, "_blank")}
                className="w-10 h-10 rounded-full hover:bg-black flex items-center justify-center group"
              >
                <FontAwesomeIcon
                  key={i}
                  icon={obj.icon}
                  className="text-[#121212] w-6 h-6 cursor-pointer group-hover:text-[#f067a6]"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col mt-5 mb-2 gap-y-3">
          <p className="font-semibold flex items-center text-gray-700">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-[#f067a6] mr-2 -rotate-90"
            />
            +1 (978) 818 5303
          </p>
          <p className="font-semibold flex items-center text-gray-700">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-[#f067a6] mr-2"
            />
            devon@thepropernest.com
          </p>
          <p className="font-semibold text-gray-700 flex items-center">
            <FontAwesomeIcon icon={faHouse} className="text-[#f067a6] mr-2" />
            257 Washington St #3, Marblehead 01945
          </p>
        </div>
      </div>
      <div
        onClick={() => window.open("https://www.sqysh.io", "_blank")}
        className="flex items-center justify-center bg-black text-xs text-white font-semibold cursor-pointer py-1.5"
      >
        <span className="mt-4"> Developed by</span>
        <Picture
          src="/images/sqysh-no-bg-white-text-2.png"
          alt="Sqysh.io"
          className="w-24 ml-1.5"
          priority={false}
        />
      </div>
    </footer>
  );
};

export default Footer;
