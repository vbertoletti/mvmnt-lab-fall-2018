import React from "react";
import { Text, View } from "react-native";
import {withNavigation} from 'react-navigation'
import styles from "./styles";

const Login = ({navigation}) => {
  return (
    <View>
          <Text>I am the Login Screen</Text>
          <Text
              onPress={() => {
                  navigation.navigate("signUp");
              }}
          >
              Sign Up
            </Text>
    </View>
  );
};

export default withNavigation(Login);
