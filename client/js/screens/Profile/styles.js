import { StyleSheet } from "react-native";
import { globalStyles, colors } from "../../config/styles";
import { Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: globalStyles.container,

  profileWrapper: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "#F4F4F4"
  },

  profileHeader: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderColor: "#D6D6D6"
  },

  headerItems: {
    flex: 1,
    alignItems: "center",
    paddingTop: 10
  },

  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 40
  },

  progression: {
    borderRadius: 50,
    borderWidth: 7,
    borderColor: colors.green,
    height: 80,
    width: 80
  },

  progressionText: {
    alignSelf: "center",
    fontSize: 20,
    padding: 20
  },

  profileOptions: {
    borderTopWidth: 1,
    borderColor: "#D6D6D6",
    width: Dimensions.get("window").width,
    backgroundColor: "white"
  },

  profileOptionsText: {
    fontSize: 15,
    padding: 20
  },

  reminders: {
    borderWidth: 1,
    borderColor: "#D6D6D6",
    width: Dimensions.get("window").width,
    backgroundColor: "white"
  },

  about: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#D6D6D6",
    width: Dimensions.get("window").width,
    backgroundColor: "white"
  },

  profileButton: {
    marginBottom: 10,
    borderRadius: 50,
    alignSelf: "center",
    borderColor: "black",
    borderWidth: 1,
    width: 250,
    backgroundColor: 'white'
  },

  buttonText: {
    fontSize: 15,
    alignSelf: "center",
    padding: 15,
    borderRadius: 50
  }
});
export default styles;
