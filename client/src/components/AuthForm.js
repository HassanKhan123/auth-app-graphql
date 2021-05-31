import React, { useState } from 'react';

const AuthForm = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='row'>
      <form className='col s4'>
        <div className='input-field'>
          <label>Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} />
        </div>

        <div className='input-field'>
          <label>Password</label>
          <input
            value={password}
            type='password'
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <button className='btn'>Submit</button>
      </form>
      ;
    </div>
  );
};

export default AuthForm;
