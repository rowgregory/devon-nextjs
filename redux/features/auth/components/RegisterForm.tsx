import Spinner from "@/app/components/Spinner";
import Typewriter from "@/app/components/Typewriter";
import React, { Fragment, useState } from "react";

const RegisterForm = ({ handleSubmit, handleInput, isLoading }: any) => {
  const [type, setType] = useState(false);

  return (
    <Fragment>
      <Typewriter
        sentence="Register: "
        speed={40}
        text="text-sm text-zinc-100 font-bold h-5"
      />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4"
      >
        <input
          autoComplete="off"
          name="username"
          type="search"
          onChange={handleInput}
          placeholder="Username"
          className="input-box focus:outline-none h-10 border-[1px] border-gray-100 w-full rounded-sm px-3"
        />
        <input
          autoComplete="off"
          onClick={() => setType(true)}
          onKeyDown={() => setType(true)}
          name="password"
          type={type ? "password" : "search"}
          onChange={handleInput}
          placeholder="Password"
          className="input-box focus:outline-none h-10 border-[1px] border-gray-100 w-full rounded-sm px-3"
        />

        {isLoading ? (
          <Spinner fill="fill-[#41a9b2]" />
        ) : (
          <button
            type="submit"
            className="font-bold bg-[#41a9b2] px-7 py-2 rounded-sm w-full text-white uppercase"
          >
            Register
          </button>
        )}
      </form>
    </Fragment>
  );
};

export default RegisterForm;
