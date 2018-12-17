import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import PropTypes from "prop-types";

const Profile = ({ navigation, data, logout, id }) => {
  return (
    <View style={styles.profileWrapper}>
      <View style={styles.profileHeader}>
        <View style={styles.headerItems}>
          <Image
            source={require("../../assets/images/placeholder.jpg")}
            style={styles.profileImage}
          />
          <Text style={styles.headerItemsText}>{` ${data.User.firstname} ${
            data.User.lastname
          }`}</Text>
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
        <Text style={styles.profileOptionsText}>Daily Reports </Text>
        <FontAwesome5 name={"chevron-right"} size={20} solid />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.profileOptions}
        onPress={() => {
          navigation.navigate("CompletedChallenges");
        }}
      >
        <Text style={styles.profileOptionsText}>Completed Challenges</Text>
        <FontAwesome5 name={"chevron-right"} size={20} solid />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.reminders}
        onPress={() => {
          navigation.navigate("Reminders");
        }}
      >
        <Text style={styles.profileOptionsText}>Reminders</Text>
        <FontAwesome5 name={"chevron-right"} size={20} solid />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.about}
        onPress={() => {
          navigation.navigate("About");
        }}
      >
        <Text style={styles.profileOptionsText}>About</Text>
        <FontAwesome5 name={"chevron-right"} size={20} solid />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.profileButton}
        onPress={() => {
          logout(id);
        }}
      >
        <Text style={styles.buttonText}>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Profile;

Profile.propTypes = {
  navigation: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};
