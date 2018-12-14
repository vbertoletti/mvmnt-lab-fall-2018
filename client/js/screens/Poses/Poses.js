import React from "react";
import { Text, TouchableOpacity } from "react-native";
import propTypes from "prop-types";
import DailyReportModal from "../../components/DailyReportModal";

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
      <DailyReportModal />
    </React.Fragment>
  );
};

Poses.propTypes = {
  navigation: propTypes.object.isRequired
};

export default Poses;
