"use client";

import { useCreateContactMutation } from "@/redux/services/contactApi";
import { RootState, useAppSelector } from "@/redux/store";
import useForm from "@/utils/useForm";
import React, { useCallback } from "react";
import Acknowledgements from "../components/home/Acknowledgements";
import Picture from "../components/common/Picture";
import ContactForm from "../components/forms/ContactForm";
import contactFormValidations from "../validations/contactFormValidations";
import FixedBanner from "../components/FixedBanner";

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

  const handleSubmit = useCallback(
    async (e: any, inputs: any) => {
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
    },
    [createContact, setErrors]
  );

  return (
    <div>
      <FixedBanner
        bgImg="/images/contact-bg.jpg"
        title="Contact"
        subtitle="Helping you get more for your real estate."
      />

      <div className="bg-white w-full relative z-10">
        <div className="w-full mx-auto">
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
