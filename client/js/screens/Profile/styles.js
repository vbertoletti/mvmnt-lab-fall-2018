import { StyleSheet } from "react-native";
import { globalStyles } from "../../config/styles";
import { Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: globalStyles.container,

  profileWrapper: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "#F4F4F4"
  },

  profileHeader: {
    flex: 0.3,
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
    top: 40
  },

  profileImage: {
    height: 90,
    width: 90,
    borderRadius: 46
  },

  progression: {
    borderRadius: 50,
    height: 90,
    width: 90
  },

  progressionTextBox: {
    backgroundColor: "white",
    borderRadius: 50,
    height: 70,
    width: 70,
    alignSelf: "center",
    position: "absolute",
    top: 10
  },
  headerItemsText: {
    paddingTop: 5,
    fontSize: 16,
    fontWeight: "bold"
  },

  progressionText: {
    alignSelf: "center",
    fontSize: 18,
    paddingVertical: 25
  },

  profileOptions: {
    borderTopWidth: 1,
    borderColor: "#D6D6D6",
    width: Dimensions.get("window").width,
    backgroundColor: "white",
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20
  },

  profileOptionsText: {
    fontSize: 16
  },

  reminders: {
    borderWidth: 1,
    borderColor: "#D6D6D6",
    width: Dimensions.get("window").width,
    backgroundColor: "white",
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20
  },

  about: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#D6D6D6",
    width: Dimensions.get("window").width,
    backgroundColor: "white",
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20
  },

  profileButton: {
    borderRadius: 50,
    alignSelf: "center",
    borderColor: "black",
    borderWidth: 1,
    width: 250,
    backgroundColor: "white",
    marginTop: 10
  },

  buttonText: {
    fontSize: 15,
    alignSelf: "center",
    padding: 15,
    borderRadius: 50,
    fontWeight: "bold"
  }
});
export default styles;
