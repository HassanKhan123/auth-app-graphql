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
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

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

          <Route
            path='/login'
            render={props => (
              <Layout {...props}>
                <LoginForm />
              </Layout>
            )}
          />

          <Route
            path='/signup'
            render={props => (
              <Layout {...props}>
                <SignupForm />
              </Layout>
            )}
          />
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default App;
