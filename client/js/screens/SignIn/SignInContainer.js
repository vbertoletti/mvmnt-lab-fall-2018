import React, { Component } from "react";
import SignIn from "./SignIn";

class SignInContainer extends Component {
  render() {
    return <SignIn navigation={this.props.navigation} />;
  }
}

export default SignInContainer;
