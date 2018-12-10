import React, { Fragment } from "react";
import { Text, View, ImageBackground } from "react-native";
import styles from "./styles";
import MainPageSessionCard from "../../components/MainPageSessionCard";

const MainPage = ({ session, navigation }) => {
  return (
    <Fragment>
      <View style={styles.root}>
        <ImageBackground
          source={require("../../assets/images/BigHeader.png")}
          style={styles.backgroundImage}
        >
          <View style={styles.container}>
            <Text style={styles.text}>GROUND CONTROL</Text>
            <View style={styles.progression}>
              <Text style={styles.progressionDate}>29/30</Text>
            </View>
            <Text style={styles.progressionText}>Progress</Text>
          </View>
        </ImageBackground>
        <MainPageSessionCard navigation={navigation} session={session} />
      </View>
    </Fragment>
  );
};

export default MainPage;
