import React, { Fragment } from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import { ImageBackground } from "react-native";
import MainPageSessionCard from "../../components/MainPageSessionCard";

const MainPage = () => {
  return (
    <Fragment>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/images/BigHeader.png")}
          style={styles.backgroundImage}
        >
          <Text style={styles.text}>GROUND CONTROL</Text>
        </ImageBackground>
        <MainPageSessionCard style={styles.card} />
      </View>
    </Fragment>
  );
};

export default MainPage;
