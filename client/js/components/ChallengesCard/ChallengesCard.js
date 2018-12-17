import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import moment from "moment";

const CompletedChallenges = ({ data }) => {
  return (
    <View style={styles.card}>
      <Text>
        {moment(data.allChallenges[0].startDate).format("MMM Do YYYY")}
        <Text> - </Text>
        {moment(data.allChallenges[0].endDate).format("MMM Do YYYY")}
      </Text>
      <Text>{data.allChallenges[0].score}</Text>
    </View>
  );
};

export default CompletedChallenges;
