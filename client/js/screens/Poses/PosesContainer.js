import React, { Component } from "react";
import Poses from "./Poses";
import propTypes from "prop-types";

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

PosesContainer.propTypes = {
  navigation: propTypes.object.isRequired
};

export default PosesContainer;
