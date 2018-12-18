import React, { Component } from "react";
import CompletedChallenges from "./CompletedChallenges";
import { Text, View } from "react-native";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import UserContext from "../../context/UserContext/UserProvider";

const AllChallengesQuery = gql`
  query AllChallenges($userId: String) {
    allChallenges(filter: { userId: $userId }) {
      id
      startDate
      endDate
      score
      daysBetween
    }
  }
`;

class CompletedChallengesContainer extends Component {
  static navigationOptions = {
    title: "COMPLETED CHALLENGES",
    headerTitleStyle: {
      color: "white",
      fontSize: 14
    },
    headerStyle: {
      backgroundColor: "transparent",
      borderBottomColor: "transparent"
    }
  };
  render() {
    return (
      <UserContext.Consumer>
        {({ id }) => (
          <Query
            query={AllChallengesQuery}
            variables={{ userId: "cjpa5q4ip0ccn0130y1xdj32i" }}
          >
            {({ loading, error, data }) => {
              if (loading) return <Text>Loading</Text>;
              if (error) return <Text>{error}</Text>;
              if (data) {
                return <CompletedChallenges data={data} />;
              }
            }}
          </Query>
        )}
      </UserContext.Consumer>
    );
  }
}

export default CompletedChallengesContainer;
