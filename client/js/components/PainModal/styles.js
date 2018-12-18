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
  face: {
    margin: 15
  },
  textInputContainer: {
    width: "85%",
    justifyContent: "space-between",
    height: 140
  },
  textInput: {
    paddingTop: 10,
    height: 60,
    width: "100%",
    borderWidth: 1,
    borderColor: "lightgray"
  }
});

export default styles;
