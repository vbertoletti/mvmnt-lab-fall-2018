import React from "react";
import { Text, ScrollView, View, Image } from "react-native";
import styles from "./styles";

const thumbnail = {
  Bear: require("../../assets/images/icons/Bear.png"),
  Superbug: require("../../assets/images/icons/Superbug.png")
};

const PosesDetails = ({ posesDetails }) => {
  return (
    <ScrollView>
      <Image source={require("../../assets/images/videoPlaceholder.png")} />
      <View style={styles.container}>
        <Image style={styles.icon} source={thumbnail[posesDetails.icon]} />
        <Text style={styles.title}>{posesDetails.title}</Text>
      </View>
      <Text style={styles.description}>{posesDetails.description}</Text>
    </ScrollView>
  );
};

export default PosesDetails;
