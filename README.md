# ReactJS App with Apollo Client

## Introduction

Learning [Apollo Client](https://www.apollographql.com/docs/react/) with caching and state management features. This project focus on managing devices and rooms for automation with client side render using GraphQL backend written [here](https://github.com/scorpionknifes/gqlmanage).

The following ReactJS project uses:
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [React Routes](https://reactrouter.com/web/)
- [Material UI](https://material-ui.com/)
- [subscriptions-transport-ws](https://github.com/apollographql/subscriptions-transport-ws)
- [emailjs-mime-parser](https://github.com/emailjs/emailjs-mime-parser)

Apollo/GraphQL features:
- Uses Websockets for GraphQL subscriptions
- Subscription appends to cached data and does not refetch
- Uses a basic JWT auth with Apollo
- Cached data is refetched when Mutation occurs
- gql fragments used to simplify code

Material UI:
- Themes are used where is possible
- useStyles is preferred over css

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Instructions

Rename [.env-example](.env-example) to .env and setup variables
```
# Name of the App
REACT_APP_HOTEL = My Hotel Name

# GraphQL backend endpoint
REACT_APP_GRAPHQL_URL = http://localhost:3000/query
REACT_APP_GRAPHQL_WS = ws://localhost:3000/query

# Basename for react-routes
REACT_APP_BASENAME = 

# React tell generate sourcemap
GENERATE_SOURCEMAP = false
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
