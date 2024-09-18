import React from "react";
import Spinner from "../Spinner";
import ContactInput from "../form-elements/ContactInput";
import ContactSelect from "../form-elements/ContactSelect";
import { DiamondUpholstery } from "@/public/images";

const contactMethodFields = [
  {
    textKey: "Choose One",
    value: "",
  },
  {
    textKey: "Email",
    value: "email",
  },
  {
    textKey: "Phone",
    value: "phone",
  },
  {
    textKey: "Text",
    value: "text",
  },
];

const inquiryTypeFields = [
  {
    textKey: "Choose One",
    value: "",
  },
  {
    textKey: "Buying",
    value: "buying",
  },
  {
    textKey: "Selling",
    value: "selling",
  },
  {
    textKey: "Renting",
    value: "renting",
  },
  {
    textKey: "General Question",
    value: "general",
  },
];

const ContactForm = ({
  handleSubmit,
  inputs,
  handleInput,
  isLoading,
  errors,
}: any) => {
  return (
    <form className="max-w-screen-sm w-full mx-auto flex flex-col p-3 pt-10 sm:p-8 md:p-16">
      <ContactInput
        label="Name"
        name="name"
        type="text"
        value={inputs.name}
        handleInput={handleInput}
        error={errors.name}
      />
      <ContactInput
        label="Email"
        name="email"
        type="email"
        value={inputs.email}
        handleInput={handleInput}
        error={errors.email}
      />
      <ContactInput
        label="Phone Number"
        name="phone"
        type="tel"
        value={inputs.phone}
        handleInput={handleInput}
        error={errors.phone}
      />

      <ContactSelect
        label="Contact Method"
        name="contactMethod"
        value={inputs.contactMethod}
        handleInput={handleInput}
        options={contactMethodFields}
        error={errors.contactMethod}
      />
      <ContactSelect
        label="Inquiry Type"
        name="inquiryType"
        value={inputs.inquiryType}
        handleInput={handleInput}
        options={inquiryTypeFields}
        error={errors.inquiryType}
      />
      <div className="flex flex-col mb-6">
        <label htmlFor="message" className="text-sm">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={7}
          value={inputs.message}
          onChange={handleInput}
          className="input-box focus:outline-none border-b-2 border-[#f067a6]"
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-xs">{errors.message}</p>
        )}
      </div>
      <ContactInput
        label="Contact Time"
        name="contactTime"
        type="text"
        value={inputs.contactTime}
        handleInput={handleInput}
        error={errors.contactTime}
      />
      {isLoading ? (
        <Spinner fill="fill-pink-400 mx-auto flex self-center" />
      ) : (
        <button
          onClick={(e: any) => handleSubmit(e, inputs)}
          style={{ backgroundImage: `url(${DiamondUpholstery.src})` }}
          className="font-bold tracking-wide text-center bg-center px-10 py-2.5 uppercase text-white bg-[#f067a6] duration-200 hover:bg-black hover:text-[#f067a6]"
        >
          Submit
        </button>
      )}
    </form>
  );
};

export default ContactForm;
