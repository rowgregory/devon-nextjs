import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import headerLinkData from "@/public/data/headerLinkData";
import { useEffect } from "react";
import Picture from "./common/Picture";

const MobileNavigation = ({ toggleMobileNavigation, close }: any) => {
  useEffect(() => {
    if (toggleMobileNavigation) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [toggleMobileNavigation]);

  return (
    <div
      className={`${
        toggleMobileNavigation
          ? "w-screen left-0 overflow-hidden bottom-0 right-0"
          : "left-[-100vw] w-none"
      } fixed duration-200 min-h-screen bg-zinc-950 top-0 left-0 flex flex-col items-center justify-center gap-5 z-[60]`}
    >
      <Link href="/" onClick={close}>
        <h1 className="tracking-wider font-bold text-[#f067a6] top-4 left-4 absolute">
          DEVON HUNT
        </h1>
      </Link>
      <FontAwesomeIcon
        onClick={close}
        icon={faTimes}
        className="text-[#f067a6] top-4 right-4 absolute cursor-pointer"
      />
      <Link href="/" onClick={close}>
        <Picture
          src="/images/tpn/tpn-logo-white-text-no-bg.png"
          alt="The Proper Nest"
          className="w-60 cursor-pointer mb-5"
          priority={false}
        />
      </Link>
      {headerLinkData.map((obj: any, i: number) => (
        <Link
          key={i}
          onClick={close}
          className="text-white duration-200"
          href={obj.path}
        >
          {obj.textKey}
        </Link>
      ))}
    </div>
  );
};

export default MobileNavigation;
