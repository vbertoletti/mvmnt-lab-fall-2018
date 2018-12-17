import { StyleSheet, Dimensions } from "react-native";
import { globalStyles } from "../../config/styles";
var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: globalStyles.container,
  backgroundImage: {
    width: width,
    height: 250,
    position: "absolute",
    top: -65
  },
  container: {
    height: height,
    width: width,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 25,
    alignSelf: "center",
    fontWeight: "bold",
    position: "absolute",
    top: 25
  },
  card: {
    backgroundColor: "#BFBFBF",
    width: 300,
    height: 400
  }
});

export default styles;
