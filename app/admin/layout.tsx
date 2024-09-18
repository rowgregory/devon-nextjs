"use client";

import React, { ReactNode, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import AdminSideNavigation from "../components/AdminSideNavigation";
import AdminMobileNavigation from "../components/AdminMobileNavigation";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const close = () => setToggleMobileMenu(false);

  return (
    <div className="flex w-full flex-col min-h-screen bg-zinc-950 text-zinc-200">
      <div className="lg:hidden block">
        <FontAwesomeIcon
          onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
          icon={faBars}
          className="text-[#f067a6] py-2 w-10 cursor-pointer z-20"
        />
      </div>
      <AdminMobileNavigation
        toggleMobileMenu={toggleMobileMenu}
        close={close}
      />
      <div className="flex">
        <aside className="hidden lg:block lg:w-[240px] bg-zinc-900">
          <AdminSideNavigation />
        </aside>
        <main className="max-w-screen-2xl w-full mx-auto">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
