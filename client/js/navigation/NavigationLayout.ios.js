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
import CompletedChallenegesScreen from "../screens/CompletedChallenges";
import RemindersScreen from "../screens/Reminders";
import AboutScreen from "../screens/About";
import EditProfileScreen from "../screens/EditProfile";
import { sharedNavigationOptions } from "./config";
import Ionicons from "react-native-vector-icons/Ionicons";

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
    CompletedChalleneges: CompletedChallenegesScreen,
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
  {
    Poses: PosesStack,
    Main: MainStack,
    Profile: ProfileStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Main") {
          iconName = "ios-information-circle";
        } else if (routeName === "Profile") {
          iconName = "ios-calendar";
        } else if (routeName === "Poses") {
          iconName = "ios-map";
        }
        return (
          <Ionicons
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "gray",
      style: { backgroundColor: "black" }
    }
  }
);
