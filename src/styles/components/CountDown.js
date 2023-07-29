import { StyleSheet } from "react-native";
import { colors, fonts } from "../themes";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row"
    },
    containerNumber: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.black,
        borderRadius: 5,
        paddingHorizontal: 10,
        width: 120,
        height: 120
    },
    containerNumberChildren: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    number: {
        color: colors.white,
        fontFamily: fonts.rad600,
        fontSize: 50,
        textAlign: "center",
        marginHorizontal: 10
    },
    point: {
        color: colors.black,
        fontFamily: fonts.rad600,
        fontSize: 50,
        marginHorizontal: 5
    }
});

export default styles;