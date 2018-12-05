import React from "react";
import { Text, View } from "react-native";
import { withNavigation } from "react-navigation";

const Poses = ({ navigation }) => {
    return (
        <View>
        <Text>I am the Poses Screen</Text>
        <Text
            onPress={() => {
                navigation.navigate("PosesDetails");
            }}
        >
            To PosesDetails
            </Text>
        </View>
    );
};

export default withNavigation(Poses);
