"use client";

import { ContactMeBg } from "@/public/images";
import { useCreateContactMutation } from "@/redux/services/contactApi";
import { RootState, useAppSelector } from "@/redux/store";
import useForm from "@/utils/useForm";
import React, { useCallback } from "react";
import Acknowledgements from "../components/home/Acknowledgements";
import Picture from "../components/common/Picture";
import ContactForm from "../components/forms/ContactForm";
import contactFormValidations from "../validations/contactFormValidations";

const Contact = () => {
  const { inputs, handleInput, setErrors, errors } = useForm([
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

  const handleSubmit = useCallback(async (e: any, inputs: any) => {
    e.preventDefault();
    const errors = contactFormValidations(inputs);
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
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
    }
  }, []);

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
                src="/images/ty.png"
                alt="Devon Hunt"
                className="max-w-[500px] aspect-square w-full object-cover"
                priority={false}
              />
              <Acknowledgements />
            </div>
          ) : (
            <ContactForm
              handleSubmit={handleSubmit}
              inputs={inputs}
              handleInput={handleInput}
              isLoading={isLoading}
              errors={errors}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
