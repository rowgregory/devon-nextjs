"use client";

import { Logo } from "@/public/images";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import MobileNavigation from "./MobileNavigation";
import headerLinkData from "@/public/data/headerLinkData";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

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
        <Link href='/'>
          <Image
            src={Logo}
            alt="Devon Hunt"
            width="0"
            height="0"
            sizes="100vw"
            className="w-52 md:w-72"
          />
        </Link>
        <div className="gap-10 hidden lg:flex">
          {headerLinkData.map((obj: any, i: number) => (
            <Link
              key={i}
              className={`${path === obj.match
                ? "border-b-4 border-[#41a9b2]"
                : "border-b-2 border-white"
                } text-sm`}
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
      <Link href='/auth/login' className='bg-gray-100 px-3 md:px-6 py-0.5 flex justify-end items-center w-full relative z-10'>
        <FontAwesomeIcon icon={faUser} />
      </Link>
    </div>
  );
};

export default Header;
