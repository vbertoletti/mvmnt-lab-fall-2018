import React, { Component } from "react";
import LogIn from "./LogIn";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import UserContext from "../../context/UserContext/UserProvider";
import PropTypes from "prop-types";

const LoginMutation = gql`
  mutation AuthenticateUser($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      token
      id
    }
  }
`;

class SignInContainer extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Mutation mutation={LoginMutation}>
        {login => (
          <UserContext.Consumer>
            {({ storeSessionToken, token }) => {
              if (token) {
                this.props.navigation.navigate("App");
              } else {
                return (
                  <LogIn login={login} storeSessionToken={storeSessionToken} />
                );
              }
            }}
          </UserContext.Consumer>
        )}
      </Mutation>
    );
  }
}

export default SignInContainer;

SignInContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};
