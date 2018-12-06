import { StyleSheet, Dimensions } from "react-native";
import { globalStyles } from "../../config/styles";
import { colors } from "../../config/styles";

const styles = StyleSheet.create({
  container: globalStyles.container,
  navButton: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: 80,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    padding: 15
  },
  body: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "#F2F2F2"
  },
  link: {
    color: colors.purple,
    fontWeight: "bold"
  },
  description: {
    padding: 14,
    fontSize: 13
  },
  descriptionContainer: {
    marginTop: 30
  },
  header: {
    fontWeight: "bold"
  },
  footer: {
    paddingTop: 50,
    padding: 14,
    fontSize: 13
  }
});

export default styles;
