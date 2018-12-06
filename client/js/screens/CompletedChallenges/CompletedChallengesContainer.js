import React, { Component } from "react";
import CompletedChallenges from "./CompletedChallenges";

class CompletedChallengesContainer extends Component {
  static navigationOptions = {
    title: "COMPLETED CHALLENGES",
    headerTitleStyle: {
      color: "white",
      fontSize: 24
    }
  };
  render() {
    return <CompletedChallenges />;
  }
}

export default CompletedChallengesContainer;
