import { StyleSheet } from "react-native";
import { colors } from "../../config/styles";
import { Dimensions } from "react-native";

const styles = StyleSheet.create({
  remindersWrapper: {
    marginTop: 50,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },

  dayPicker: {
    marginTop: 50
  },

  image: {
    alignSelf: "center",
    width: 80,
    height: 70
  },

  remindersDay: {
    color: colors.purple,
    fontWeight: "bold",
    fontSize: 25,
    alignSelf: "center",
    marginVertical: 15
  },

  setReminderButton: {
    borderRadius: 50,
    alignSelf: "center",
    borderColor: "black",
    borderWidth: 1,
    width: 250,
    position: "absolute",
    top: 500
  },

  buttonText: {
    fontSize: 15,
    alignSelf: "center",
    padding: 15,
    borderRadius: 50
  },
  remindersCheckbox: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    position: "absolute",
    top: 430
  },
  checkboxText: {
    paddingLeft: 20,
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default styles;
