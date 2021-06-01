import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import AuthForm from './AuthForm';
import Login from '../mutations/Login';

import fetchCurrentUser from '../queries/CurrentUser';

const LoginForm = () => {
  const [error, setError] = useState('');
  const [login] = useMutation(Login);

  const submitHandler = async ({ email, password }) => {
    try {
      await login({
        variables: { email, password },
        refetchQueries: [{ query: fetchCurrentUser }],
      });
    } catch (err) {
      console.log('error', err.message);
      setError(err.message);
    }
  };

  return (
    <div className='container'>
      <h3>Login</h3>
      <AuthForm onSubmit={submitHandler} error={error} />
    </div>
  );
};

export default LoginForm;
