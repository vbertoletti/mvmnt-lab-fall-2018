import React from "react";
import { Text, View } from "react-native";
import {withNavigation} from 'react-navigation'
import styles from "./styles";

const MainPage = ({ navigation }) => {
  return(  <View>
    <Text>I am the MainPage Screen</Text>
    <Text
      onPress={() => {
        navigation.navigate("WorkoutSession");
      }}
    >
      To WorkoutSession
    </Text>
  </View>)
};

export default withNavigation(MainPage);
