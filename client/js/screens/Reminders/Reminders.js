import React from "react";
import { Text, View } from "react-native";
import { withNavigation } from 'react-navigation'
import styles from "./styles";

const Reminders = ({ navigation }) => {
    return (
        <View>
            <Text>I am the Reminders Screen</Text>
        </View>
    )
};

export default withNavigation(Reminders);
