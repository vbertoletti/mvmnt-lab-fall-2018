import React, { Component } from "react";
import EditProfile from "./EditProfile";

class EditProfileContainer extends Component {
  static navigationOptions = {
    title: "EDIT PROFILE",
    headerTitleStyle: {
      color: "white",
      fontSize: 24
    }
  };
  render() {
    return <EditProfile />;
  }
}

export default EditProfileContainer;
