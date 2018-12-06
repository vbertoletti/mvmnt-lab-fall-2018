import React from "react";
import { Text, TouchableOpacity } from "react-native";
import propTypes from "prop-types";

const MainPage = ({ navigation }) => {
  return (
    <React.Fragment>
      <Text>I am the MainPage Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("WorkoutSession");
        }}
      >
        <Text>To WorkoutSession</Text>
      </TouchableOpacity>
    </React.Fragment>
  );
};

MainPage.propTypes = {
  navigation: propTypes.object.isRequired
};

export default MainPage;
