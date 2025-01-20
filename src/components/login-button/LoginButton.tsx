import { useLogin } from '@/app/(Auth Pages)/login/hooks/useLogin';
import React from 'react';

const LoginButton = () => {
  //   const { loginHandler } = useLogin();

  //   const mutation = loginHandler();

  const handleSubmit = async (values: any) => {
    'use server';
    console.log(':aaaa');
    // mutation.mutate(values);
  };
  return <button onClick={handleSubmit}>test click</button>;
};

export default LoginButton;
