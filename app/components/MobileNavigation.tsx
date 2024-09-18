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
      <FontAwesomeIcon
        onClick={close}
        icon={faTimes}
        className="text-green-400 top-4 right-4 absolute cursor-pointer"
      />
      <Link href="/" onClick={close}>
        <h1 className="text-5xl tracking-wider font-bold text-[#41a9b2] mb-3 duration-200 hover:tracking-widest">
          DEVON HUNT
        </h1>
      </Link>
      {headerLinkData.map((obj: any, i: number) => (
        <Link
          key={i}
          onClick={close}
          className="text-[#9ac841] duration-200"
          href={obj.path}
        >
          {obj.textKey}
        </Link>
      ))}
      <Link href="/" onClick={close}>
        <Picture
          src="/images/tpn/tpn-logo-black-text-no-bg"
          alt="The Proper Nest"
          className="w-60 cursor-pointer mt-10"
          priority={false}
        />
      </Link>
    </div>
  );
};

export default MobileNavigation;
