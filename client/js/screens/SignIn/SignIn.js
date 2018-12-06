import React from "react";
import { Text, TouchableOpacity } from "react-native";
import propTypes from "prop-types";

const SignIn = ({ navigation }) => {
  return (
    <React.Fragment>
      <Text>I am the SignIn Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("signUp");
        }}
      >
        <Text>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("App");
        }}
      >
        <Text>Log in</Text>
      </TouchableOpacity>
    </React.Fragment>
  );
};

SignIn.propTypes = {
  navigation: propTypes.object.isRequired
};

export default SignIn;
