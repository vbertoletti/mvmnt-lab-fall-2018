<<<<<<< HEAD
import { StyleSheet } from "react-native";
import { globalStyles } from "../../config/styles";
=======
import { StyleSheet, Dimensions } from "react-native";
import { globalStyles } from "../../config/styles";
var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;
>>>>>>> set up the mainpage ui and install and link vector icon

const styles = StyleSheet.create({
  container: globalStyles.container,
  backgroundImage: {
    width: width,
    height: 250
  },
  container: {
    height: height,
    width: width,
    backgroundColor: "#F2F2F2"
  },
  text: {
    color: "white",
    fontSize: 25,
    alignSelf: "center",
    fontWeight: "bold",
    position: "absolute",
    top: 25
  }
});

export default styles;
