import { StyleSheet, Dimensions } from "react-native";
import { globalStyles } from "../../config/styles";

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: globalStyles.container,
  modalContentContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: height - 120,
    width: width - 60,
    backgroundColor: "white"
  },
  backgroundImage: {
    width: width,
    height: height,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    width: 300,
    borderRadius: 30,
    alignSelf: "center",
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1
  },
  buttonText: {
    alignSelf: "center",
    color: "black",
    fontWeight: "bold",
    margin: 15
  },
  sliderContainer: {
    width: width - 80,
    alignItems: "center"
  },
  sliderNumber: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  },
  headingContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    height: 250
  },
  heading: {
    fontSize: 20,
    color: "#9E4AE0"
  },
  secondaryHeading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black"
  },
  tertiaryHeading: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black"
  }
});

export default styles;
