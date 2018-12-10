import { StyleSheet } from "react-native";
import { globalStyles } from "../../config/styles";

const styles = StyleSheet.create({
  container: globalStyles.container,
  sessionContainer: {
    width: 290,
    height: 70,
    flexDirection: "row",
    justifyContent: "space-evenly",
    textAlign: "center"
  },
  session: {
    justifyContent: "center",
    width: 90
  }
});

export default styles;
