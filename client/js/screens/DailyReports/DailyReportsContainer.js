import React, { Component } from "react";
import DailyReports from "./DailyReports";
import gql from "graphql-tag";
import { View } from "react-native";
import { Query } from "react-apollo";

const DailyReportQuery = gql`
  query AllDailyReports($id: String!) {
    allDailyReport(email: $email, password: $password) {
      token
      id
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
        {dailyReportsQuery => (
          <View>
            <DailyReports dailyReportsQuery={dailyReportsQuery} />
          </View>
        )}
      </Query>
    );
  }
}

export default DailyReportsContainer;
