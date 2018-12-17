import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import moment from "moment";
import ProgressBar from "../ProgressBar";
import { getAverageOfUserScores } from "../../helpers";

const CompletedChallenges = ({ data }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeading}>
        <Text style={styles.heading}>30 DAY GROUND CONTROL</Text>
        <Text>
          {moment(data.startDate).format("MMM Do YYYY")}
          <Text> - </Text>
          {moment(data.endDate).format("MMM Do YYYY")}
        </Text>
      </View>
      <Image source={require("../../assets/images/checkmark.png")} />
      <View style={styles.scoresText}>
        <Text style={styles.score}>{getAverageOfUserScores(data.score)}</Text>
        <Text style={styles.smallHeading}>MONTHLY AVERAGE SCORE</Text>
      </View>

      <ProgressBar color={"#1CC6B2"} score={data.score} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.loginButtons}>DAILY REPORT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CompletedChallenges;
