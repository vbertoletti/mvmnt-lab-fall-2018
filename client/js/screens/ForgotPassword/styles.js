import { StyleSheet } from "react-native";
import { globalStyles } from "../../config/styles";
import { Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: globalStyles.container,
  header: {
    color: "white",
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 20
  },
  text: {
    color: "white",
    alignSelf: "center",
    fontSize: 16,
    fontWeight: "400",
    width: "80%",
    textAlign: "center",
    marginTop: 20
  },
  loginForm: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50
  },
  formFields: {
    color: "white"
  },
  loginButtons: {
    alignSelf: "center",
    color: "white",
    margin: 15
  },
  fieldLines: {
    borderBottomWidth: 2,
    borderBottomColor: "white",
    marginBottom: 60
  },
  button: {
    width: 300,
    borderRadius: 30,
    alignSelf: "center",
    backgroundColor: "transparent",
    marginBottom: 60
  },
  background: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  textInput: {
    color: "white",
    height: 30
  },
  companyLogo: {
    width: 210,
    height: 100,
    alignSelf: "center",
    marginTop: 60
  },
  return: {
    color: "white",
    alignSelf: "center",
    fontSize: 16,
    marginBottom: 20
  }
});

export default styles;
