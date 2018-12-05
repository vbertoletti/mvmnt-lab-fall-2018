import React, { Component } from "react";
import { Text, View } from "react-native";
import client from "../config/api";
import { ApolloProvider } from "react-apollo";
import AppNavigator from "./navigation/RootStackNavigator";

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client} AppNavigator={AppNavigator}>
        <AppNavigator />
      </ApolloProvider>
    )
  }
}
