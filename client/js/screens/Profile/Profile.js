import React from "react";
import { Text, View } from "react-native";
import { withNavigation } from 'react-navigation'
import styles from "./styles";

const Profile = ({navigation}) => {
    return(
    <View>
            <Text>I am the Profile Screen</Text>
            <Text
                onPress={() => {
                    navigation.navigate("EditProfile");
                }}
            >
                Edit Profile
            </Text>
            <Text
                onPress={() => {
                    navigation.navigate("DailyReports");
                }}
            >
                To DailyReports
            </Text>
            <Text
                onPress={() => {
                    navigation.navigate("CompletedChalleneges");
                }}
            >
                To CompletedChallenges
            </Text>
            <Text
                onPress={() => {
                    navigation.navigate("About");
                }}
            >
                To About
            </Text>
            <Text
                onPress={() => {
                    navigation.navigate("login");
                }}
            >
                logout
            </Text>
    </View>
    )
    };
    
    export default withNavigation(Profile);
