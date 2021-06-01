import React, { useState } from 'react';

const AuthForm = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async e => {
    e.preventDefault();
    await props.onSubmit({ email, password });
  };

  return (
    <div className='row'>
      <form className='col s6' onSubmit={submitHandler}>
        <div className='input-field'>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='Email'
          />
        </div>

        <div className='input-field'>
          <input
            value={password}
            type='password'
            onChange={e => setPassword(e.target.value)}
            placeholder='Password'
          />
        </div>

        <button className='btn'>Submit</button>
      </form>
      ;
    </div>
  );
};

export default AuthForm;
