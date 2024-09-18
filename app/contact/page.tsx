"use client";

import { ContactMeBg, Ty } from "@/public/images";
import { useCreateContactMutation } from "@/redux/services/contactApi";
import { RootState, useAppSelector } from "@/redux/store";
import useForm from "@/utils/useForm";
import React from "react";
import Picture from "../components/elements/Picture";
import Acknowledgements from "../components/home/Acknowledgements";
import Spinner from "../components/Spinner";

const Contact = () => {
  const { inputs, handleInput } = useForm([
    "name",
    "email",
    "phone",
    "contactMethod",
    "inquiryType",
    "message",
    "contactTime",
  ]);

  const [createContact, { isLoading }] = useCreateContactMutation();
  const contact = useAppSelector((state: RootState) => state.contact);
  const success = contact.success;

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await createContact({
      name: inputs.name,
      email: inputs.email,
      phone: inputs.phone,
      contactMethod: inputs.contactMethod,
      inquiryType: inputs.inquiryType,
      message: inputs.message,
      contactTime: inputs.contactTime,
    })
      .unwrap()
      .then(() => window.scrollTo(0, 0))
      .catch((err: any) => console.log("ERROR: ", err));
  };

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${ContactMeBg.src})` }}
        className="bg-center bg-cover fixed top-0 left-0 w-full h-[450px] z-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="absolute inset-0 flex flex-col items-center justify-center mt-20">
          <h1 className="font-bold text-5xl text-white text-center">Contact</h1>
          <h4 className="pt-7 md:pt-9 pb-7 font-bold text-lg text-white tracking-wider">
            Helping you get more for your real estate
          </h4>
        </div>
      </div>
      <div className="bg-white w-full relative z-10">
        <div className="w-full mx-auto mt-[356px]">
          {success ? (
            <div className="pt-16 flex flex-col justify-center items-center">
              <Picture
                src={Ty}
                alt="Devon Hunt"
                className="max-w-[500px] aspect-square w-full object-cover"
              />
              <Acknowledgements />
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="max-w-screen-sm w-full mx-auto flex flex-col p-3 pt-10 sm:p-8 md:p-16"
            >
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={inputs.name}
                onChange={handleInput}
                className="input-box mb-6 h-10 focus:outline-none border-b-2 border-[#f067a6]"
              />
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={inputs.email}
                onChange={handleInput}
                className="input-box mb-6 h-10 focus:outline-none border-b-2 border-[#f067a6]"
              />
              <label htmlFor="phone" className="text-sm">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={inputs.phone}
                onChange={handleInput}
                className="input-box mb-6 h-10 focus:outline-none border-b-2 border-[#f067a6]"
              />
              <label htmlFor="contactMethod" className="text-sm">
                Contact Method
              </label>
              <select
                id="contactMethod"
                name="contactMethod"
                value={inputs.contactMethod}
                onChange={handleInput}
                className="input-box mb-6 h-10 focus:outline-none border-b-2 border-[#f067a6]"
              >
                <option value="">Choose One</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="text">Text</option>
              </select>
              <label htmlFor="inquiryType" className="text-sm">
                Inquiry Type
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                value={inputs.inquiryType}
                onChange={handleInput}
                className="mb-6 h-10 focus:outline-none border-b-2 border-[#f067a6]"
              >
                <option value="">Choose One</option>
                <option value="buying">Buying</option>
                <option value="selling">Selling</option>
                <option value="renting">Renting</option>
                <option value="general">General Question</option>
              </select>
              <label htmlFor="message" className="text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={7}
                value={inputs.message}
                onChange={handleInput}
                className="input-box mb-6 focus:outline-none border-b-2 border-[#f067a6]"
              ></textarea>
              <label htmlFor="contactTime" className="text-sm">
                Contact Time
              </label>
              <input
                type="text"
                id="contactTime"
                name="contactTime"
                value={inputs.contactTime}
                onChange={handleInput}
                className="input-box mb-6 h-10 focus:outline-none border-b-2 border-[#f067a6]"
              />
              {isLoading ? (
                <Spinner fill="fill-black mx-auto flex self-center" />
              ) : (
                <button
                  type="submit"
                  className="w-full mt-8 py-2 bg-[#f067a6] font-bold text-lg text-white uppercase"
                >
                  Submit
                </button>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
