import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import fetchCurrentUser from '../queries/CurrentUser';

const Header = () => {
  const FETCH_CURRENT_USER = fetchCurrentUser;

  const { data, loading, error } = useQuery(FETCH_CURRENT_USER);

  const renderButtons = () => {
    if (loading) return <div></div>;

    if (data.user) {
      return <div>Logout</div>;
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
