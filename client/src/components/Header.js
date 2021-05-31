import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';

import fetchCurrentUser from '../queries/CurrentUser';
import Logout from '../mutations/Logout';

const Header = () => {
  const [logout] = useMutation(Logout);

  const { data, loading, error } = useQuery(fetchCurrentUser);

  const logoutHandler = async () => {
    try {
      await logout({
        refetchQueries: [{ query: fetchCurrentUser }],
      });
    } catch (err) {
      console.log('error', err, error);
    }
  };

  const renderButtons = () => {
    if (loading) return <div></div>;

    if (data.user) {
      return (
        <li>
          <a onClick={logoutHandler}>Logout</a>
        </li>
      );
    }

    return (
      <div>
        <li>
          <Link to='/signup'>Signup</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </div>
    );
  };

  return (
    <nav>
      <div className='nav-wrapper'>
        <Link to='/' className='brand-logo left'>
          Home
        </Link>
        <ul className='right'>{renderButtons()}</ul>
      </div>
    </nav>
  );
};

export default Header;
