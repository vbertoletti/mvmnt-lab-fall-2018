import { StyleSheet, Dimensions } from "react-native";
import { globalStyles } from "../../config/styles";
const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: globalStyles.container,
  loginForm: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  formFields: {
    color: "white"
  },
  loginButtons: {
    alignSelf: "center",
    color: "white",
    margin: 15
  },
  labels: {
    color: "white"
  },
  fieldLines: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    marginBottom: 20,
    marginTop: 5
  },
  button: {
    width: width,
    height: 50,
    alignSelf: "center",
    backgroundColor: "#9F49E0"
  },
  buttonText: {
    justifyContent: "center",
    width: 150,
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    color: "white",
    alignSelf: "center",
    marginTop: 10
  }
});

export default styles;
