import React, { Component } from "react";
import LogIn from "./LogIn";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import UserContext from "../../context/UserContext/UserProvider";

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
        {login => (
          <UserContext.Consumer>
            {({ signin, token }) => {
              if (token) {
                this.props.navigation.navigate("App");
              } else {
                return <LogIn login={login} signin={signin} />;
              }
            }}
          </UserContext.Consumer>
        )}
      </Mutation>
    );
  }
}

export default LoginContainer;
