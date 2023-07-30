import { StyleSheet } from "react-native";
import { fonts } from "../themes/index";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        gap: 15
    },
    image: {
        width: 80,
        height: 80
    },
    containerTexts: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    textMain: {
        fontFamily: fonts.rad600,
        fontSize: 20
    },
    textSub: {
        fontFamily: fonts.rad400,
        fontSize: 15
    }
});

export default styles;