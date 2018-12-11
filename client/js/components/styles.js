import { StyleSheet, Dimensions } from "react-native";
import { globalStyles } from "../config/styles";
var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: globalStyles.container,
  card: {
    height: 300,
    width: 280,
    backgroundColor: "white",
    alignSelf: "center",
    position: "absolute",
    top: 200,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap"
  },
  text: {
    width: 100
  },
  headerContainer: {
    flexDirection: "row",
    backgroundColor: "yellow"
  },
  header: {
    backgroundColor: "pink",
    fontSize: 20,
    justifyContent: "space-between",
    width: 120,
    alignSelf: "center"
  }
});

export default styles;
