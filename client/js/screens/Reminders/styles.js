import { StyleSheet, Dimensions } from "react-native";
import { globalStyles } from "../../config/styles";
const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: globalStyles.container,
    Pose: {
        height: height / 8.5,
        width,
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: 'row'
    },
    title: {
        fontSize: 20,
        fontWeight: "600"
    },
    spinner: {
        height,
        justifyContent: "center"
    },
    image: {
        position: "absolute",
        left: 30,
        fontSize: 18,
        fontWeight: '600'
    },
    time: {
        position: 'absolute',
        left: 160
    }
})