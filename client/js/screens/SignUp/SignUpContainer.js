import React, { Component, Fragment } from "react";
import Signup from "./Signup";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

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
          <Fragment>
            <Signup signup={createUser} />
          </Fragment>
        )}
      </Mutation>
    );
  }
}

export default SignupContainer;
