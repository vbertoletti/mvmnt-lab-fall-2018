import React, { Component } from "react";
import Signup from "./Signup";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { View } from "react-native";

const SignupMutation = gql`
  mutation CreateUser(
    $email: String!
    $password: String!
    $firstname: String!
    $lastname: String!
  ) {
    createUser(
      email: $email
      password: $password
      firstname: $firstname
      lastname: $lastname
    ) {
      id
      email
    }
  }
`;

class SignupContainer extends Component {
  render() {
    return (
      <Mutation mutation={SignupMutation}>
        {(createUser, { data }) => (
          <View>
            <Signup signup={createUser} />
            {console.log("this is it", data)}
          </View>
        )}
      </Mutation>
    );
  }
}

export default SignupContainer;
