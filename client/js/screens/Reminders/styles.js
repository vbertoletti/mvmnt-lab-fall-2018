
import { StyleSheet, Dimensions } from "react-native";
import { globalStyles } from "../../config/styles";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: globalStyles.container,
    reminder: {
        height: height / 8.5,
        width,
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row"
    },
    title: {
        fontSize: 20,
        fontWeight: "600"
    },
    day: {
        fontSize: 18,
        fontWeight: "600",
        width: width / 3.5
    },
    time: {
        fontSize: 16,
        width: width / 5,
        marginRight: 30
    },
    seperator: {
        height: 1,
        backgroundColor: "#CED0CE"
    }
});

export default styles;