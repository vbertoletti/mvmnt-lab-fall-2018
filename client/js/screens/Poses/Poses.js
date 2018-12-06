import React from "react";
import { Text, TouchableOpacity } from "react-native";
import propTypes from "prop-types";

const Poses = ({ navigation }) => {
  return (
    <React.Fragment>
      <Text>I am the Poses Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("PosesDetails");
        }}
      >
        <Text>To PosesDetails</Text>
      </TouchableOpacity>
    </React.Fragment>
  );
};

Poses.propTypes = {
  navigation: propTypes.object.isRequired
};

export default Poses;
