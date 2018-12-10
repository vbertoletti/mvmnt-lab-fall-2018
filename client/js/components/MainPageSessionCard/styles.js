import { StyleSheet } from "react-native";
import { globalStyles } from "../../config/styles";

const styles = StyleSheet.create({
  container: globalStyles.container,
  card: {
    height: 350,
    width: 320,
    backgroundColor: "white",
    alignSelf: "center",
    position: "absolute",
    top: 240,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap"
  },
  text: {
    width: 100
  },
  headerContainer: {
    flexDirection: "column",
    flexWrap: "wrap",
    borderRadius: 7,
    height: 30,
    width: 320
  },
  header: {
    fontSize: 16,
    justifyContent: "center",
    width: 160,
    textAlign: "center",
    height: 30,
    marginTop: 5
  },
  sessionContainer: {
    width: 320,
    height: 310
  },
  day: {
    fontSize: 25,
    color: "#9F49E0",
    alignSelf: "center"
  },
  button: {
    width: 280,
    height: 40,
    alignSelf: "center",
    backgroundColor: "pink",
    borderRadius: 20
  },
  buttonText: {
    alignSelf: "center",
    fontSize: 18,
    marginTop: 10
  }
});

export default styles;
