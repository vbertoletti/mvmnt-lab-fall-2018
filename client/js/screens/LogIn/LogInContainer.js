import React, { Component } from "react";
import Login from "./Login";
import gql from "graphql-tag";
import { Text, View } from "react-native";
import { Mutation } from "react-apollo";

const LoginMutation = gql`
  mutation AuthenticateUser($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      token
      id
    }
  }
`;

class LoginContainer extends Component {
  render() {
    return (
      <Mutation mutation={LoginMutation}>
        {authenticateUser => (
          <View>
            <Login login={authenticateUser} />
          </View>
        )}
      </Mutation>
    );
  }
}

export default LoginContainer;
