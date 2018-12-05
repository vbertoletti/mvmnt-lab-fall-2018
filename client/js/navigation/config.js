import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Header } from "react-navigation";
import {colors} from '../../config/styles'

export const sharedNavigationOptions = navigation => ({
    headerBackTitle: null,
    header: props => <Header {...props} />,

    headerTitle: (
        "Hello"
    ),
    headerStyle: {
        backgroundColor: colors.green
    }
});
