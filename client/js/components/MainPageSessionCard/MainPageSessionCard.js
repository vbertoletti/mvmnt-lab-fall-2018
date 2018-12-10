import React from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import styles from "./styles";
import Session from "../Session/Session";

const MainPageSessionCard = ({ session, navigation }) => {
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
      <View style={styles.sessionContainer}>
        <View>
          <Text style={styles.day}>DAY 29</Text>
        </View>
        <ScrollView>
          {session.allPoses.map(pose => {
            return <Session session={pose} key={pose.id} />;
          })}
        </ScrollView>
        <TouchableOpacity onPress={() => alert("hi")} style={styles.button}>
          <Text style={styles.buttonText}>START</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainPageSessionCard;
