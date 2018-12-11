import { StyleSheet } from "react-native";
import { globalStyles } from "../../config/styles";

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
  logo: {
    marginTop: 50,
    alignSelf: "center"
  }, 
  textInput: {
    color: "white"
  }
});

export default styles;
