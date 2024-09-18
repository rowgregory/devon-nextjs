"use client";

import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import MobileNavigation from "./MobileNavigation";
import headerLinkData from "@/public/data/headerLinkData";
import Picture from "./common/Picture";
import socialMediaIconsData from "@/public/data/socialmediaIconsData";

const Header = () => {
  const pathname = usePathname();
  const path = pathname.split("/")[1];
  const [toggleMobileNavigation, setToggleMobileNavigation] = useState(false);
  const close = () => setToggleMobileNavigation(false);

  return (
    <div className={`${["auth", "admin"].includes(path) ? "hidden" : "block"}`}>
      <MobileNavigation
        toggleMobileNavigation={toggleMobileNavigation}
        close={close}
      />
      <div className="p-3 md:pt-4 pb-3 flex items-center justify-between relative z-10 bg-white">
        <Link href="/">
          <Picture
            src="/images/tpn/tpn-logo-black-text-no-bg.png"
            alt="The Proper Nest"
            className="w-52"
            priority={false}
          />
        </Link>
        <div className="gap-10 hidden lg:flex">
          {headerLinkData.map((obj: any, i: number) => (
            <Link
              key={i}
              className={`${
                path === obj.match ? "border-[#f067a6]" : ""
              } text-sm hover:border-[#f067a6] border-b-4 border-white`}
              href={obj.path}
            >
              {obj.textKey}
            </Link>
          ))}
        </div>
        <FontAwesomeIcon
          onClick={() => setToggleMobileNavigation(true)}
          icon={faBars}
          className="block lg:hidden text-black cursor-pointer"
        />
        <div className="flex items-center">
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
      <Link
        href="/auth/login"
        className="bg-gray-100 px-3 md:px-6 py-0.5 flex justify-end items-center w-full relative z-10"
      >
        <FontAwesomeIcon icon={faUser} />
      </Link>
    </div>
  );
};

export default Header;
