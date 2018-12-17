import React, { Fragment } from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import { ImageBackground } from "react-native";
import ChallengesCard from "../../components/ChallengesCard/ChallengesCard";

const CompletedChallenges = ({ data }) => {
  return (
    <ImageBackground
      source={require("../../assets/images/BigHeader.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        {data.allChallenges.map(x => {
          return <Text>{x.daysBetween}</Text>;
        })}
        <ChallengesCard data={data} />
      </View>
    </ImageBackground>
  );
};

export default CompletedChallenges;
