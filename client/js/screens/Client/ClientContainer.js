import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Client from "./Client";
import { View, ActivityIndicator, Text } from "react-native";
import { formatSessionData } from "../../lib/helper";

const Clients = gql`
  query allUsers($filter: UserFilter) {
    allUsers(filter: $filter) {
      email
      firstname
      id
      image
      lastname
      password
    }
  }
`;

class ClientContainer extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Query query={Clients}>
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator />;
          if (error) return <Text>{error}</Text>;
          if (data) {
            return (
              <View>
                <Client client={formatSessionData(data.allUsers)} />
              </View>
            );
          }
        }}
      </Query>
    );
  }
}

export default ClientContainer;
