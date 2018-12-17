import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import MainPageScreen from "../screens/MainPage";
import PosesScreen from "../screens/Poses";
import ProfileScreen from "../screens/Profile";
import PosesDetailsScreen from "../screens/PosesDetails";
import WorkoutSessionScreen from "../screens/WorkOutSession";
import DailyReportsScreen from "../screens/DailyReports";
import CompletedChallengesScreen from "../screens/CompletedChallenges";
import RemindersScreen from "../screens/Reminders";
import AboutScreen from "../screens/About";
import EditProfileScreen from "../screens/EditProfile";
import { sharedNavigationOptions } from "./config";
import { Image } from "react-native";

const MainStack = createStackNavigator(
  {
    Main: MainPageScreen,
    WorkoutSession: WorkoutSessionScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const PosesStack = createStackNavigator(
  {
    Poses: PosesScreen,
    PosesDetails: PosesDetailsScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    DailyReports: DailyReportsScreen,
<<<<<<< HEAD
    CompletedChallenges: CompletedChallenegesScreen,
=======
    CompletedChallenges: CompletedChallengesScreen,
>>>>>>> Started creating all challe ges screen
    Reminders: RemindersScreen,
    About: AboutScreen,
    EditProfile: EditProfileScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

export const AppStack = createBottomTabNavigator(
  { Poses: PosesStack, Main: MainStack, Profile: ProfileStack },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let image;
        let style = { marginBottom: 25 };
        let showStyle = true;

        if (routeName === "Main") {
          focused
            ? (image = require("../assets/images/workout-active.png"))
            : (image = require("../assets/images/workout-inactive.png"));
        } else if (routeName === "Profile") {
          showStyle = false;
          focused
            ? (image = require("../assets/images/profile-active.png"))
            : (image = require("../assets/images/profile-inactive.png"));
        } else if (routeName === "Poses") {
          showStyle = false;
          focused
            ? (image = require("../assets/images/poses-active.png"))
            : (image = require("../assets/images/poses-inactive.png"));
        }
        return <Image style={showStyle ? style : {}} source={image} />;
      }
    }),
    tabBarOptions: {
      showLabel: false,
      style: { backgroundColor: "#F8F8F8", height: 45 }
    }
  }
);
