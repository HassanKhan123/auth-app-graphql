import React from 'react';
import { useMutation } from '@apollo/client';

import AuthForm from './AuthForm';
import Login from '../mutations/Login';

const LoginForm = () => {
  const [login] = useMutation(Login);

  const submitHandler = async ({ email, password }) => {
    try {
      await login({
        variables: { email, password },
      });
    } catch (err) {
      console.log('error', err);
    }
  };

  return (
    <div className='container'>
      <h3>Login</h3>
      <AuthForm onSubmit={submitHandler} />
    </div>
  );
};

export default LoginForm;
