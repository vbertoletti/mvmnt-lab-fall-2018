import React, { Component } from "react";
import { View } from "react-native";
import ForgotPassword from "./ForgotPassword";

class ForgotPasswordContainer extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View>
        <ForgotPassword navigation={this.props.navigation} />
      </View>
    );
  }
}

export default ForgotPasswordContainer;
