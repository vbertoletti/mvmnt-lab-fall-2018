import { StyleSheet } from "react-native";
import { globalStyles } from "../../config/styles";

const styles = StyleSheet.create({
  container: globalStyles.container,
  centerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%"
  }
});

export default styles;
