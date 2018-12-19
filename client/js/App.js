import React, { Component } from "react";
import client from "./config/api";
import { ApolloProvider } from "react-apollo";
import { UserProvider } from "./context/UserContext";
import { CoachProvider } from "./context/CoachContext";
import AppNavigator from "./navigation/RootStackNavigator";

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <UserProvider>
          <CoachProvider>
            <AppNavigator />
          </CoachProvider>
        </UserProvider>
      </ApolloProvider>
    );
  }
}
