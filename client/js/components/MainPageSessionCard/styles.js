import { StyleSheet, Dimensions } from "react-native";
import { globalStyles } from "../../config/styles";
var width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: globalStyles.container,
  card: {
    backgroundColor: "white",
    width: width - 60,
    height: 400,
    marginLeft: 20,
    marginRight: 10,
    marginTop: 170,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 20
  },
  text: {
    width: 100
  },
  headerContainer: {
    flexDirection: "column",
    flexWrap: "wrap",
    borderRadius: 7,
    height: 38,
    width: width - 70,
    backgroundColor: "#D8D8D8",
    borderBottomStartRadius: 0,
    borderBottomEndRadius: 0,
    justifyContent: "center",
    marginTop: 2
  },
  lightHeader: {
    fontSize: 16,
    justifyContent: "center",
    width: 153,
    textAlign: "center",
    height: 38,
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 10
  },
  darkHeader: {
    fontSize: 16,
    justifyContent: "center",
    width: 153,
    textAlign: "center",
    height: 38,
    paddingRight: 10,
    borderRadius: 20,
    backgroundColor: "#D8D8D8",
    paddingTop: 10
  },
  sessionContainer: {
    width: 320,
    height: 370
  },
  day: {
    fontSize: 25,
    color: "#9F49E0",
    alignSelf: "center"
  },
  button: {
    width: 280,
    height: 40,
    alignSelf: "center",
    borderRadius: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "black"
  },
  buttonText: {
    alignSelf: "center",
    fontSize: 18,
    marginTop: 10
  },
  light: {
    backgroundColor: "white"
  },
  heavy: {
    backgroundColor: "white"
  }
});

export default styles;
