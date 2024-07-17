"use client";

import React, { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Logo } from "@/public/images";
import Link from "next/link";
import {
  useRegisterMutation,
  useVerifyRegisterCodeMutation,
} from "@/redux/services/authApi";
import useForm from "@/utils/useForm";
import RegisterForm from "@/redux/features/auth/components/RegisterForm";
import { RootState, useAppSelector } from "@/redux/store";
import Lock from '@/redux/features/auth/components/Lock';

const Register = () => {
  const [register, { isLoading }] = useRegisterMutation();
  const [verifyRegisterCode] = useVerifyRegisterCodeMutation();
  const { inputs, handleInput } = useForm(["username", "password"]);
  const navigate = useRouter();
  const [code, setCode] = useState("");
  const success = useAppSelector((state: RootState) => state.auth.success);
  const inputRef = useRef(null) as any;

  const handleRegister = async (e: any) => {
    e.preventDefault();
    if (inputs.password !== "" && inputs.username !== "") {
      await register({ username: inputs.username, password: inputs.password })
        .unwrap()
        .then((data: any) => {
          if (data.accountWasCreated) {
            navigate.push("/admin/dashboard");
          }
        })
        .catch((err: any) => {
          console.log("ERROR: ", err);
        });
    }
  };

  const handleVerifyCode = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await verifyRegisterCode({ code })
      .unwrap()
      .then((data: any) => {
        if (data?.codeValidated) {
          inputRef.current.value = '';
        }
      })
      .catch((err: any) => {
        inputRef.current.value = '';
        console.error('ERROR: ', err)
      });
  };

  return (
    <div className="flex flex-col pt-40 items-center">
      <Link href="/">
        <Image
          src={Logo}
          alt="Nest Forward"
          width="0"
          height="0"
          sizes="100vw"
          priority
          className="w-80 mb-12"
        />
      </Link>
      <div className="flex flex-col px-3 lg:px-0 max-w-96 w-full">
        {success ? (
          <RegisterForm
            handleSubmit={handleRegister}
            handleInput={handleInput}
            isLoading={isLoading}
          />
        ) : (
          <Lock
            inputRef={inputRef}
            setCode={setCode}
            code={code}
            handleVerifyCode={handleVerifyCode}
            isLoading={isLoading}
            success={success}
          />
        )}
      </div>
    </div>
  );
};

export default Register;
