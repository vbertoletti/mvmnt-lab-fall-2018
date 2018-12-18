import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import UserContext from "../../context/UserContext/UserProvider";
import CoachAccess from "./CoachAccess";
import { View, Text } from "react-native";

const LoginMutation = gql`
  mutation AuthenticateUser($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      token
      id
    }
  }
`;

class CoachAccessContainer extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Mutation mutation={LoginMutation}>
        {login => (
          <UserContext.Consumer>
            {({ signin, token }) => {
              if (token) {
                this.props.navigation.navigate("Client");
              } else {
                return <CoachAccess login={login} signin={signin} />;
              }
            }}
          </UserContext.Consumer>
        )}
      </Mutation>
    );
  }
}

export default CoachAccessContainer;
