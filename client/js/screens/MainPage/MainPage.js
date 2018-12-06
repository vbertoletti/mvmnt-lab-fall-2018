<<<<<<< HEAD
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import propTypes from "prop-types";

const MainPage = ({ navigation }) => {
  return (
    <React.Fragment>
      <Text>I am the MainPage Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("WorkoutSession");
        }}
      >
        <Text>To WorkoutSession</Text>
        </TouchableOpacity>
    </React.Fragment>
  );
};

MainPage.propTypes = {
  navigation: propTypes.object.isRequired
=======
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
>>>>>>> set up the mainpage ui and install and link vector icon
};

export default MainPage;
