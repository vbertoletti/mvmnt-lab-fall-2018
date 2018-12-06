import React from "react";
import { Text,TouchableOpacity } from "react-native";
import propTypes from "prop-types";

const Profile = ({ navigation }) => {
  return (
    <React.Fragment>
      <Text>I am the Profile Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("EditProfile");
        }}
      >
        <Text>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("DailyReports");
        }}
      >
        <Text>To DailyReports</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("CompletedChalleneges");
        }}
      >
        <Text>To CompletedChallenges</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Reminders");
        }}
      >
        <Text>To Reminders</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("About");
        }}
      >
        <Text>To About</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignIn");
        }}
      >
        <Text>logout</Text>
      </TouchableOpacity>
    </React.Fragment>
  );
};

Profile.propTypes = {
  navigation: propTypes.object.isRequired
};

export default Profile;
