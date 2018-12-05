import React, { Component } from "react";
import Poses from "./Poses";

class PosesContainer extends Component {
  static navigationOptions = {
    title: "POSES",
    headerTitleStyle: {
      color: "white",
      fontSize: 24
    }
  };
  render() {
    return <Poses navigation={this.props.navigation} />;
  }
}

export default PosesContainer;
