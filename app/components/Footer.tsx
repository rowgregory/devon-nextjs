import { DeveloperBy, Logo } from "@/public/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { usePathname } from "next/navigation";
import Picture from "./elements/Picture";

const Footer = () => {
  const pathname = usePathname();
  const path = pathname.split("/")[1];

  return (
    <footer
      className={`w-full  mx-auto ${["admin", "auth"].includes(path) ? "hidden" : "block"
        }`}
    >
      <div className="flex items-center justify-between px-3 py-12 max-w-screen-xl">
        <Image
          onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
          src={Logo}
          alt="Devon Hunt - Nest Forward"
          width="0"
          height="0"
          sizes="100vw"
          className="w-60"
          priority
        />
        <div className="hidden md:flex items-center gap-8">
          <p className="font-semibold">(978) 818 5303</p>
          <p className="font-semibold">devon@nestforward.com</p>
        </div>
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
      <div className="flex md:hidden items-center gap-8 mt-10 justify-center px-3 py-12 max-w-screen-xl">
        <p className="font-semibold">(978) 818 5303</p>
        <p className="font-semibold">devon@nestforward.com</p>
      </div>
      <div
        onClick={() => window.open("https://www.sqysh.io", "_blank")}
        className="flex items-center justify-center bg-black text-xs text-white font-semibold cursor-pointer"
      >
        Developed by{" "}
        <Picture src={DeveloperBy} alt="Sqysh.io" className="w-20" />
      </div>
    </footer>
  );
};

export default Footer;
