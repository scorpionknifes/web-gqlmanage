import React from 'react';
import './App.css';

import MenuAppBar from './components/MenuBar/MenuBar';
import AuthProvider from './contexts/AuthContext';
import DeviceChange from './components/Device/DeviceEdit';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

//Pages
import Login from './pages/Login/Login';
import {AddRoom, EditRoom, Rooms, Room} from './pages/Room'
import {AddDevice, EditDevice, Devices, Device} from './pages/Device'

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
              <Route exact path="/login" component={Login} />

              <Route exact path="/rooms" component={Rooms} />
              <Route exact path="/room/add" component={AddRoom}/>
              <Route exact path="/room/:id" component={Room}/>
              <Route exact path="/room/edit/:id" component={EditRoom}/>
    
              <Route exact path="/devices" component={Devices} />
              <Route exact path="/devices/:id" component={Devices} />
              <Route exact path="/device/add" component={AddDevice} />
              <Route exact path="/device/:id" component={Device}/>
              <Route exact path="/device/edit/:id" component={EditDevice}/>
            </Switch>
          </MenuAppBar>
        </AuthProvider>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
