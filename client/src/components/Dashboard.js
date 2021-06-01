import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import fetchCurrentUser from '../queries/CurrentUser';

const Dashboard = props => {
  const { data, loading } = useQuery(fetchCurrentUser);
  useEffect(() => {
    if (!loading && !data?.user) {
      props.history.push('/login');
    }
  }, [data]);
  return (
    <div>
      <h1>You are now logged in!!</h1>
    </div>
  );
};

export default Dashboard;
