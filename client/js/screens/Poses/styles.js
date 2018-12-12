import { StyleSheet, Dimensions } from "react-native";
import { globalStyles } from "../../config/styles";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: globalStyles.container,
  Pose: {
    height: height / 6,
    width,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: "600"
  },
  spinner: {
    height,
    justifyContent: "center"
  },
  image: {
    position: "absolute",
    left: 30
  },
  arrow: {
    position: "absolute",
    right: 20
  }
});

export default styles;
