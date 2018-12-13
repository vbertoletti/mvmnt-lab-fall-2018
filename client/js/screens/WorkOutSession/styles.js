import { StyleSheet, Dimensions } from "react-native";
import { globalStyles } from "../../config/styles";
const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: globalStyles.container,
  video: {
    height: 280,
    width: width
  },
  button: {
    height: 70,
    width: width,
    backgroundColor: "#9F49E0",
    justifyContent: "center"
  },
  buttonText: {
    justifyContent: "center",
    width: 150,
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    color: "white"
  }
});

export default styles;
