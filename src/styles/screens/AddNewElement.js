import { StyleSheet } from "react-native";
import { colors, fonts } from "../themes/index";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingVertical: 50,
        paddingHorizontal: 20
    },
    text: {
        color: colors.black,
        fontFamily: fonts.rad500,
        fontSize: 20
    },
    textTitle: {
        
    }   
});

export default styles;