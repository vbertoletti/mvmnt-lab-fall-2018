import React, { Component, Fragment } from "react";
import SignUp from "./SignUp";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const SignupMutation = gql`
  mutation CreateUser(
    $email: String!
    $password: String!
    $firstname: String!
    $lastname: String!
  ) {
    signupUser(
      email: $email
      password: $password
      firstname: $firstname
      lastname: $lastname
    ) {
      id
      token
    }
  }
`;

class SignUpContainer extends Component {
  render() {
    return (
      <Mutation mutation={SignupMutation}>
        {signupUser => (
          <Fragment>
            <SignUp signup={signupUser} />
          </Fragment>
        )}
      </Mutation>
    );
  }
}

export default SignUpContainer;
