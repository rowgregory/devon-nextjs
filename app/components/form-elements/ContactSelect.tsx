import React from "react";

const ContactSelect = ({
  label,
  name,
  value,
  handleInput,
  options,
  error,
}: any) => {
  return (
    <div className="flex flex-col mb-6 ">
      <label htmlFor={name} className="text-sm">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={handleInput}
        className="input-box h-10 focus:outline-none border-b-2 border-[#f067a6] rounded-none"
      >
        {options.map((obj: any, i: number) => (
          <option key={i} value={obj.value}>
            {obj.textKey}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};
export default ContactSelect;
