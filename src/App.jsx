import React from 'react';
import './App.css';
import Login from './pages/Login/Login'
import AddRoom from './pages/AddRoom/AddRoom'
import MenuAppBar from './components/MenuBar/MenuBar';
import AuthProvider from './contexts/AuthContext';
import View from './components/Device/View';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_URL,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  uri: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <AuthProvider>
          <MenuAppBar>
            <Switch>
              <Route exact path="/addroom" component={AddRoom} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/device" component={View} />
            </Switch>
          </MenuAppBar>
        </AuthProvider>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
