import React from 'react';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Layout from './components/Layout';

const link = createHttpLink({
  uri: 'http://localhost:5000/graphql',
  credentials: 'include',
});

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
  link,
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path='/' exact render={props => <Layout {...props} />} />

          {/* <Route
            path='/song/new'
            render={(props) => <SongCreate {...props} />}
          />

          <Route
            path='/song/:id'
            render={(props) => <SongDetail {...props} />}
          /> */}
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default App;
