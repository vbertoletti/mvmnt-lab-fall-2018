import { StyleSheet, Dimensions } from "react-native";
import { globalStyles } from "../../config/styles";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: globalStyles.container,
  pose: {
    height: height / 6,
    width,
    flexDirection: 'row',
    marginLeft: width / 24
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    alignSelf: 'center',
    marginLeft: width/6,
    width: width / 4,
    textAlign: 'center'
  },
  spinner: {
    height,
    justifyContent: "center"
  },
  image: {
    justifyContent: 'flex-start',
    alignSelf: 'center'
  },
  arrow: {
    alignSelf: 'center',
    justifyContent: 'flex-end',
    marginLeft: width / 5
  },
  seperator: {
    height: 1,
    backgroundColor: "#CED0CE"
  }
});

export default styles;
