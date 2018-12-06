import React, { Component } from "react";
import Profile from "./Profile";
import propTypes from 'prop-types'

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

ProfileContainer.propTypes = {
  navigation: propTypes.object.isRequired
};

export default ProfileContainer;
