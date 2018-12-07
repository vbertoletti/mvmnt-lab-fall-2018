import { StyleSheet } from "react-native";
import { globalStyles } from "../../config/styles";
import { Dimensions } from "react-native";
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
    width: 300,
    borderRadius: 30,
    alignSelf: "center",
    backgroundColor: "#1BC695"
  },
  background: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  textInput: {
    color: "white",
    height: 30
  },
  inputFields: {
    color: "white"
  },
  companyLogo: {
    width: 210,
    height: 100,
    alignSelf: "center",
    marginTop: 60
  }
});
export default styles;
