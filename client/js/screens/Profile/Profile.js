import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import React from "react";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.profileWrapper}>
      <View style={styles.profileHeader}>
        <View style={styles.headerItems}>
          <Image
            source={require("../../assets/images/placeholder.jpg")}
            style={styles.profileImage}
          />
          <Text style={styles.headerItemsText}>Person Name</Text>
        </View>
        <View style={styles.headerItems}>
          <View style={styles.progression}>
            <Text style={styles.progressionText}>7/30</Text>
          </View>
          <Text style={styles.headerItemsText}>Progress</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.profileOptions}
        onPress={() => {
          navigation.navigate("DailyReports");
        }}
      >
        <Text style={styles.profileOptionsText}>Daily Reports</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.profileOptions}
        onPress={() => {
          navigation.navigate("CompletedChallenges");
        }}
      >
        <Text style={styles.profileOptionsText}>Completed Challenges</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.reminders}
        onPress={() => {
          navigation.navigate("Reminders");
        }}
      >
        <Text style={styles.profileOptionsText}>Reminders</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.about}
        onPress={() => {
          navigation.navigate("About");
        }}
      >
        <Text style={styles.profileOptionsText}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.profileButton}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text style={styles.buttonText}>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Profile;
