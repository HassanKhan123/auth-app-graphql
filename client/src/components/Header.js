import React from 'react';
import { useQuery } from '@apollo/client';

import fetchCurrentUser from '../queries/CurrentUser';

const Header = () => {
  const FETCH_CURRENT_USER = fetchCurrentUser;

  const { data, loading, error } = useQuery(FETCH_CURRENT_USER);

  console.log('DATA==========', data);

  if (loading) {
    return <h3>Loading.....</h3>;
  }
  return <div>Header</div>;
};

export default Header;
