import React, { Component } from "react";
import RemindersDetails from "./RemindersDetails";
import { Image } from "react-native";

class RemindersDetailsContainer extends Component {
  static navigationOptions = {
    title: "SELECT TIME",
    headerTitleStyle: {
      color: "white",
      fontSize: 24
    },
    headerTintColor: "white",
    headerBackground: (
      <Image source={require("../../assets/images/headerSmall.png")} />
    )
  };
  render() {
    return <RemindersDetails />;
  }
}

export default RemindersDetailsContainer;
