import React from "react";

const ContactInput = ({
  label,
  name,
  type,
  value,
  handleInput,
  error,
}: any) => {
  return (
    <div className="flex flex-col mb-6 ">
      <label htmlFor={name} className="text-sm">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleInput}
        className="input-box h-10 focus:outline-none border-b-2 border-[#f067a6] rounded-none"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default ContactInput;
