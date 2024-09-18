import React, { useState } from "react";
import Spinner from "@/app/components/Spinner";

const LoginForm = ({ handleSubmit, handleInput, isLoading }: any) => {
  const [type, setType] = useState(false);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
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
        type={type ? "password" : "search"}
        name="password"
        onChange={handleInput}
        placeholder="Password"
        className="input-box focus:outline-none h-10 border-[1px] border-gray-100 w-full rounded-sm px-3"
      />

      {isLoading ? (
        <Spinner fill="fill-pink-400" />
      ) : (
        <button
          type="submit"
          className="font-bold bg-[#f067a6] px-7 py-2 rounded-sm w-full text-white uppercase"
        >
          Log In
        </button>
      )}
    </form>
  );
};

export default LoginForm;
