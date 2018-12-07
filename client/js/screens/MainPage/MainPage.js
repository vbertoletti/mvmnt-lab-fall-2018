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
<<<<<<< HEAD
>>>>>>> set up the mainpage ui and install and link vector icon
=======
>>>>>>> set up structure of main page and fix code in signup
};

export default MainPage;
