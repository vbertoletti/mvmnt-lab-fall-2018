import React, { Component } from "react";
import Profile from "./Profile";

class ProfileContainer extends Component {
  static navigationOptions = {
    title: "PROFILE",
    headerTitleStyle: {
      color: "white",
      fontSize: 24
    }
  };
  render() {
    return <Profile navigation={this.props.navigation} />;
  }
}

export default ProfileContainer;
