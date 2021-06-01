import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import AuthForm from './AuthForm';
import Signup from '../mutations/Signup';

import fetchCurrentUser from '../queries/CurrentUser';

const SignupForm = () => {
  const [error, setError] = useState('');
  const [signup] = useMutation(Signup);

  const submitHandler = async ({ email, password }) => {
    try {
      await signup({
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
      <h3>Signup</h3>
      <AuthForm onSubmit={submitHandler} error={error} />
    </div>
  );
};

export default SignupForm;
