import React, { Component } from "react";
import DailyReports from "./DailyReports";

class DailyReportsContainer extends Component {
  static navigationOptions = {
    title: "DAILY REPORTS",
    headerTitleStyle: {
      color: "white",
      fontSize: 24
    }
  };
  render() {
    return <DailyReports />;
  }
}

export default DailyReportsContainer;
