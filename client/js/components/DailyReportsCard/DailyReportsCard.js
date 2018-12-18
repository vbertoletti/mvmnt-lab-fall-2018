import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import moment from "moment";
import ProgressBar from "../ProgressBar";
import { colors } from '../../config/styles'

const DailyReportsCard = ({ data }) => {
  return <View style={styles.card}>
      <View style={styles.cardHeading}>
        <Text style={styles.heading}>
          {moment(data.date).format("MMM DD, YYYY")}
        </Text>
      </View>
      <View style={styles.scoresText}>
        <Text style={styles.smallHeading}>SESSION SCORE</Text>
        <ProgressBar color={colors.green} score={[data.work]} />
      </View>
      <View style={styles.scoresText}>
        <Text style={styles.smallHeading}>PAIN METER</Text>
        <ProgressBar color={colors.purple} score={[data.pain]} />
      </View>
      <View style={styles.scoresText}>
        <Text style={styles.smallHeading}>DESCRIBE YOUR PAIN</Text>
        <Text>{data.painDescription}</Text>
      </View>
      <View style={styles.scoresText}>
        <Text style={styles.smallHeading}>NOTES</Text>
        <Text>{data.notes}</Text>
      </View>
    </View>;
};

export default DailyReportsCard;
