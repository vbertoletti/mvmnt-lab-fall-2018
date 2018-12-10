import React, { Component } from "react";
import LogIn from "./LogIn";
import gql from "graphql-tag";
import { View } from "react-native";
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
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Mutation mutation={LoginMutation}>
        {authenticateUser => (
          <View>
            <LogIn login={authenticateUser} />
          </View>
        )}
      </Mutation>
    );
  }
}

export default LoginContainer;
