import React, { Component } from "react";
import CompletedChallenges from "./CompletedChallenges";
import { Text, View } from "react-native";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const AllChallengesQuery = gql`
  query AllChallenges {
    allChallenges {
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
      position: "absolute",
      borderBottomColor: "transparent"
    }
  };
  render() {
    return (
      <Query query={AllChallengesQuery}>
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading</Text>;
          if (error) return <Text>{error}</Text>;
          console.log("Daterrrrr", data);
          if (data) {
            console.log("Dater", data);
            return <CompletedChallenges data={data} />;
          }
        }}
      </Query>
    );
  }
}

export default CompletedChallengesContainer;
