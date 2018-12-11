import React, { Component } from "react";
import client from "./config/api";
import { ApolloProvider } from "react-apollo";
import { UserProvider } from "./context/UserContext";
import AppNavigator from "./navigation/RootStackNavigator";
import ForgotPassword from '../js/screens/ForgotPassword'

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <UserProvider>
          <ForgotPassword />
        </UserProvider>
      </ApolloProvider>
    );
  }
}
