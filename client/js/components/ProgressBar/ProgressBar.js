import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import { getAverageOfUserScores } from "../../helpers";

const ProgressBar = ({ color, score }) => {
  return (
    <View style={styles.progressBar}>
      <View
        style={{
          width: `${getAverageOfUserScores(score) * 10}%`,
          height: 10,
          borderRadius: 30,
          alignSelf: "flex-start",
          backgroundColor: color
        }}
      />
      <View style={styles.scoreNumbers}>
        <Text>1</Text>
        <Text>2</Text>
        <Text>3</Text>
        <Text>4</Text>
        <Text>5</Text>
        <Text>6</Text>
        <Text>7</Text>
        <Text>8</Text>
        <Text>9</Text>
        <Text>10</Text>
      </View>
    </View>
  );
};

export default ProgressBar;
