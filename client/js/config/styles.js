import { StyleSheet } from "react-native";

export const colors = {
  green: "#16C682",
  purple: "#9F49E0",
  grey: "#D8D8D8"
};

export const typography = {
  baseSize: 16,
  fontMainH1: "Rubik-Regular",
  fontMainH2: "Rubik-Medium"
  // fontAccentH3: "Metric-Regular",
  // fontButton: "Metric-Medium"
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignSelf: "center",
    marginLeft: 10,
    marginRight: 10
  }
});
