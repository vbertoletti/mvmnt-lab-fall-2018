import React, { Fragment } from "react";
import { Text, View, TouchableOpacity, Linking } from "react-native";
import styles from "./styles";

const About = () => {
  return (
    <View style={styles.body}>
      <View style={styles.navButton}>
        <Text style={styles.header}>Privacy Policy</Text>
      </View>
      <View style={styles.navButton}>
        <Text style={styles.header}>Terms of Use</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          Ground Control was brought to you by
          <Text style={styles.header}>MVMNT LAB </Text>Sports Performance based
          in Vancouver, BC.
        </Text>
        <Text style={styles.description}>
          Visit our website
          <Text
            onPress={() => Linking.openURL("https://mvmtlab.com/")}
            style={styles.link}
          >
            {" www.mvmtlab.com"}
          </Text>
        </Text>
        <Text style={styles.footer}>
          Loading screen artwork made by
          <Text style={styles.link}> ARNO SCHURMANS</Text>
        </Text>
      </View>
    </View>
  );
};

export default About;
