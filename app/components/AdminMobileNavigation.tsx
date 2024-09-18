import Link from "next/link";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { persistor, useAppDispatch } from "@/redux/store";
import { resetAuth } from "@/redux/features/auth/authSlice";
import Picture from "./common/Picture";

const AdminMobileNavigation = ({ toggleMobileMenu, close }: any) => {
  const dispatch = useAppDispatch();
  const navigate = useRouter();

  const handleLogout = () => {
    close();
    persistor.purge();
    dispatch(resetAuth());
    navigate.push("/auth/login");
  };

  return (
    <div
      className={`${
        toggleMobileMenu
          ? "w-screen left-0 overflow-hidden"
          : "left-[-100vw] w-none"
      } fixed duration-200 min-h-screen bg-zinc-950 top-0 left-0 flex flex-col items-center justify-center gap-5 z-[60]`}
    >
      <FontAwesomeIcon
        onClick={close}
        icon={faTimes}
        className="text-[#f067a6] top-4 right-4 absolute cursor-pointer"
      />
      <Link href="/" onClick={close}>
        <Picture
          src="/images/tpn/tpn-logo-white-text-no-bg.png"
          alt="The Proper Nest"
          className="object-contain mx-auto w-60 mb-10"
          priority={false}
        />
      </Link>
      <Link
        onClick={close}
        className="duration-200 hover:text-[#f067a6]"
        href="/admin/dashboard"
      >
        Dashboard
      </Link>
      <Link
        onClick={close}
        className="duration-200 hover:text-[#f067a6]"
        href="/admin/testimonials"
      >
        Testimonials
      </Link>
      <Link
        onClick={close}
        className="duration-200 hover:text-[#f067a6] mb-6"
        href="/admin/contacts"
      >
        Contact
      </Link>
      <Link
        onClick={handleLogout}
        className="duration-200 hover:text-[#f067a6] text-sm"
        href="/auth/login"
      >
        Logout
      </Link>
    </div>
  );
};

export default AdminMobileNavigation;
