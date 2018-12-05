import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import propTypes from "prop-types";

const Poses = ({ navigation }) => {
  return (
    <View>
      <Text>I am the Poses Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("PosesDetails");
        }}
      >
        <Text>To PosesDetails</Text>
      </TouchableOpacity>
    </View>
  );
};

Poses.propTypes = {
  navigation: propTypes.object.isRequired
};

export default Poses;
