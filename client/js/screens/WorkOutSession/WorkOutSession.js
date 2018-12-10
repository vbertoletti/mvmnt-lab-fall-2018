import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";

const WorkoutSession = ({ session }) => {
  return (
    <React.Fragment>
      <Image
        source={require("../../assets/images/videoPlaceholder.png")}
        style={styles.video}
      />
    </React.Fragment>
  );
};

export default WorkoutSession;
