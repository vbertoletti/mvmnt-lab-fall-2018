import { StyleSheet, Dimensions } from "react-native";
import { globalStyles } from "../../config/styles";
var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#BFBFBF",
    width: 300,
    height: 400
  }
});

export default styles;
