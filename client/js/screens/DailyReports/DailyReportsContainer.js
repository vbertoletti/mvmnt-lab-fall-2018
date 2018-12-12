import React, { Component } from "react";
import DailyReports from "./DailyReports";
import gql from "graphql-tag";
import { View, Text } from "react-native";
import { Query } from "react-apollo";
import styles from "./styles";

const DailyReportQuery = gql`
  query allDailyReports {
    allDailyReports {
      id
      date
      pain
      score
      userId
      work
      painDescription
      notes
    }
  }
`;

class DailyReportsContainer extends Component {
  static navigationOptions = {
    title: "DAILY REPORTS",
    headerTitleStyle: {
      color: "white",
      fontSize: 24
    }
  };
  render() {
    return (
      <Query query={DailyReportQuery}>
        {({ loading, error, data }) => {
          if (loading)
            return (
              <View style={styles.centerContainer}>
                <Text> Loading</Text>
              </View>
            );
          if (error) return `${error}`;
          if (data) {
            return <DailyReports data={data} />;
          }
        }}
      </Query>
    );
  }
}

export default DailyReportsContainer;
