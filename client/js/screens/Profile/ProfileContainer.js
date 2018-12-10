import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import Profile from "./Profile";

class ProfileContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "PROFILE",
    headerTitleStyle: {
      color: "white",
      fontSize: 24
    },
    headerRight: (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("EditProfile");
        }}
      >
        <Text style={{ color: "white", marginRight: 8 }}>EDIT</Text>
      </TouchableOpacity>
    )
  });

  render() {
    return <Profile navigation={this.props.navigation} />;
  }
}

export default ProfileContainer;
