import React, { Component } from "react";
<<<<<<< HEAD
import client from "./config/api";
import { ApolloProvider } from "react-apollo";
import { UserProvider } from "./context/UserContext";
import AppNavigator from "./navigation/RootStackNavigator";
=======
import { Text, View } from "react-native";
import { typography } from "../../client/js/config/styles";
>>>>>>> add linear-gradient

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <UserProvider>
          <AppNavigator />
        </UserProvider>
      </ApolloProvider>
    );
  }
}
