import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import UserContext from "../../context/UserContext/UserProvider";
import CoachAccess from "./CoachAccess";

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
            {({ storeSessionToken, token }) => {
              console.log(storeSessionToken, token);
              if (token) {
                this.props.navigation.navigate("Coach");
              } else {
                return (
                  <CoachAccess
                    login={login}
                    storeSessionToken={storeSessionToken}
                    navigation={this.props.navigation}
                  />
                );
              }
            }}
          </UserContext.Consumer>
        )}
      </Mutation>
    );
  }
}

export default CoachAccessContainer;
