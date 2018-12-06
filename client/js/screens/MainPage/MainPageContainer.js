import React, { Component } from "react";
import MainPage from "./MainPage";
import propTypes from "prop-types";

class MainPageContainer extends Component {
  static navigationOptions = {
    title: "GROUND CONTROL",
    headerTitleStyle: {
      color: "white",
      fontSize: 24
    }
  };
  render() {
    return <MainPage navigation={this.props.navigation} />;
  }
}

MainPageContainer.propTypes = {
  navigation: propTypes.object.isRequired
};

export default MainPageContainer;
