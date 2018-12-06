import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const MainPageSessionCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => alert("hello")}>
          <Text style={styles.header}>LIGHT</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("hello")}>
          <Text style={styles.header}>HEAVY</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.text}>DAY 30</Text>
    </View>
  );
};

export default MainPageSessionCard;
