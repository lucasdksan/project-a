import { StyleSheet } from "react-native";
import { colors } from "../themes/index";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
    },
    text: {
        color: colors.white
    }   
});

export default styles;