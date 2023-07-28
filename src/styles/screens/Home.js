import { StyleSheet } from "react-native";
import { colors } from "../themes/index";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: colors.white
    }   
});

export default styles;