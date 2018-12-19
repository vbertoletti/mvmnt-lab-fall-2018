import { StyleSheet } from "react-native";
import { globalStyles } from "../../config/styles";
import { Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: globalStyles.container,
  editProfileInputs: {
    borderBottomWidth: 1,
    borderColor: "grey",
    height: Dimensions.get("window").height / 13,
    paddingLeft: 15
  },

  editprofilewrapper: {
    marginTop: 18
  },
  editSubmitButton: {
    marginVertical: 15,
    borderRadius: 50,
    alignSelf: "center",
    borderColor: "black",
    borderWidth: 1,
    width: Dimensions.get("window").width / 1.5
  },

  avatar: {
    height: Dimensions.get("window").height / 7,
    width: Dimensions.get("window").width / 4,
    borderRadius: 48,
    marginTop: 15,
    alignSelf: "center"
  },

  profileEditButton: {
    alignSelf: "center",
    marginTop: 8
  },

  formWrapper: {
    width: Dimensions.get("window").width / 1.2,
    alignSelf: "center"
  }
});

export default styles;
