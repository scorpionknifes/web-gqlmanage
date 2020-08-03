import React from 'react'
import './App.css'

import MenuAppBar from './components/MenuBar/MenuBar'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { getMainDefinition } from '@apollo/client/utilities'
import { split, ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

//WS
import { WebSocketLink } from '@apollo/client/link/ws'

//Pages
import Login from './pages/Login/Login';
import { AddRoom, EditRoom, Rooms, Room } from './pages/Room'
import { AddDevice, EditDevice, Devices, Device } from './pages/Device'
import { User, AddUser, Users, EditUser } from './pages/User';
import Emails from './pages/Email/Emails';
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { ThemeProvider, createMuiTheme } from '@material-ui/core'

const httpLink = createHttpLink({
    uri: process.env.REACT_APP_GRAPHQL_URL,
});


const subscriptionClient = new SubscriptionClient(
    process.env.REACT_APP_GRAPHQL_WS,
    {
        reconnect: true,
    },
    null,
    ["graphql-ws", localStorage.getItem('token')])

const wsLink = new WebSocketLink(subscriptionClient);

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            Authorization: token ? `Bearer ${token}` : "",
        }
    }
});

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    authLink.concat(httpLink),
);

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache()
});

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#c30000',
      },
      secondary: {
        main: '#c30000',
      },
    },
  });

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter basename={'/manage'}>
                <ApolloProvider client={client}>
                    <MenuAppBar>
                        <Switch>
                            <Route exact path="/login" component={Login} />

                            <Route exact path="/rooms" component={Rooms} />
                            <Route exact path="/room/add" component={AddRoom} />
                            <Route exact path="/room/:id" component={Room} />
                            <Route exact path="/room/edit/:id" component={EditRoom} />

                            <Route exact path="/devices" component={Devices} />
                            <Route exact path="/devices/:id" component={Devices} />
                            <Route exact path="/device/add/:id" component={AddDevice} />
                            <Route exact path="/device/:id" component={Device} />
                            <Route exact path="/device/edit/:id" component={EditDevice} />

                            <Route exact path="/users" component={Users} />
                            <Route exact path="/user/:id" component={User} />
                            <Route exact path="/user/add" component={AddUser} />
                            <Route exact path="/user/edit/:id" component={EditUser} />

                            <Route exact path="/emails" component={Emails} />

                            <Redirect to="/rooms" />
                        </Switch>
                    </MenuAppBar>
                </ApolloProvider>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
