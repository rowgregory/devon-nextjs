'use client'

import Typewriter from '@/app/components/Typewriter';
import { Logo } from '@/public/images';
import LoginForm from '@/redux/features/auth/components/LoginForm';
import { useLoginMutation } from '@/redux/services/authApi';
import useForm from '@/utils/useForm';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { FormEvent } from 'react'

const Login = () => {
  const navigate = useRouter();
  const [login, { isLoading }] = useLoginMutation();
  const { inputs, handleInput } = useForm(['username', 'password']);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputs.password !== '' && inputs.username !== '') {
      await login({ username: inputs.username, password: inputs.password })
        .unwrap()
        .then((data: any) => {
          if (data.isAuthenticated) {
            navigate.push('/admin/dashboard');
          }
        })
        .catch((err: any) => {
          console.log('ERROR: ', err);
        });
    }
  };

  return (
    <div className="flex flex-col items-center pt-40">
      <Link href='/'>
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
        <Typewriter
          sentence="Login"
          speed={40}
          text="text-zinc-700 font-bold h-5 mb-3"
        />
        <LoginForm
          handleSubmit={handleSubmit}
          handleInput={handleInput}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};
export default Login