"use client";

import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useMemo } from "react";

const Contact = () => {
  const searchParams = useSearchParams();
  const contactString = searchParams?.get("contact") as any;

  const contact = useMemo(() => {
    return contactString ? JSON.parse(contactString) : null;
  }, [contactString]);

  return (
    <div className='max-w-screen-md w-full mx-auto mt-20 px-3 lg:px-0'>
      <Link
        href="/admin/contacts"
        className="w-fit border border-zinc-900 bg-zinc-900 px-3.5 py-1.5 flex items-center hover:no-underline group hover:bg-zinc-800 duration-300"
      >
        <FontAwesomeIcon icon={faChevronLeft} className="fa-xs mr-2" />
        <p className="font-Matter-Regular text-sm">Back to contacts</p>
      </Link>
      <div className="max-w-screen-md w-full mx-auto border-[1px] border-zinc-800 rounded-md p-8 mt-8">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-4">
            <h3 className="text-sm mb-1 font-light">Name</h3>
            <p className="font-semibold">{contact?.name}</p>
          </div>
        </div>
        <div className="w-full h-[1px] bg-zinc-800 my-7"></div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6">
            <h3 className="text-sm mb-1 font-light">Email</h3>
            <p className="font-semibold">{contact?.email}</p>
          </div>
          <div className="col-span-12 md:col-span-4">
            <h3 className="text-sm mb-1 font-light">Phone Number</h3>
            <p className="font-semibold">{contact?.phone}</p>
          </div>
        </div>
        <div className="w-full h-[1px] bg-zinc-800 my-7"></div>
        <div className="grid grid-cols-12  gap-6">
          <div className="col-span-12 md:col-span-6">
            <h3 className="text-sm mb-1 font-light">Contact Method</h3>
            <p className="font-semibold">{contact?.contactMethod}</p>
          </div>
          <div className="col-span-12 md:col-span-4">
            <h3 className="text-sm mb-1 font-light">Inquiry Type</h3>
            <p className="font-semibold">{contact?.inquiryType}</p>
          </div>
        </div>
        <div className="w-full h-[1px] bg-zinc-800 my-7"></div>
        <div className="col-span-12 md:col-span-4">
          <h3 className="text-sm mb-1 font-light">Contact Time</h3>
          <p className="font-semibold">{contact?.contactTime}</p>
        </div>
        <div className="w-full h-[1px] bg-zinc-800 my-7"></div>
        <div className="col-span-12 md:col-span-4">
          <h3 className="text-sm mb-1 font-light">Message</h3>
          <p className="font-semibold">{contact?.message}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
