import { StyleSheet, Dimensions } from "react-native";
import { globalStyles } from "../../config/styles";
const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: globalStyles.container,
  video: {
    height: 320,
    width: width
  },
  container: {
    width: width,
    flexDirection: "row",
    height: 100
  },
  icon: {
    justifyContent: "flex-start",
    alignSelf: "center",
    margin: 20
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    justifyContent: "center",
    alignContent: "center",
    margin: 20,
    alignSelf: "center"
  },
  description: {
    padding: 20
  }
});

export default styles;
