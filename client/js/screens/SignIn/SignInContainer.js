import React, { Component } from "react";
import SignIn from "./SignIn";
import propTypes from 'prop-types';

class SignInContainer extends Component {
  render() {
    return <SignIn navigation={this.props.navigation} />;
  }
}

SignInContainer.propTypes = {
  navigation: propTypes.object.isRequired
};

export default SignInContainer;
