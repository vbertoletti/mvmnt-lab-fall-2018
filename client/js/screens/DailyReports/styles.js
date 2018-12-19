import { StyleSheet, Dimensions } from "react-native";
import { globalStyles, colors } from "../../config/styles";
var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: globalStyles.container,
  backgroundImage: {
    width: width,
    height: height / 2,
    position: "absolute",
    top: -65 
  },
  container: {
    height: height,
    width: width,
    alignItems: "center",
    justifyContent: "center"
  },
  cardContainer: {
    alignItems: "center"
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
  },
  background: {
    backgroundColor: "black"
  },
  days: {
    color: 'white',
    fontSize: 20,
    fontWeight: '900',
    padding: 10
  },
  purpCirc: {
    color: colors.purple,
    borderRadius: 25,
    position: 'absolute'
  }
});

export default styles;
