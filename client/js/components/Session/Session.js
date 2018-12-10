import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

const Session = ({ session }) => {
  return (
    <View style={styles.sessionContainer}>
      <View style={styles.session}>
        <Image source={require("../../assets/images/icons/Bear.png")} />
      </View>
      <View style={styles.session}>
        <Text>{session.title}</Text>
      </View>
      <View style={styles.session}>
        <Text>{session.duration}</Text>
      </View>
    </View>
  );
};

export default Session;
