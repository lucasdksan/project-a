import { colors, fonts } from "../styles/themes/index";

const stackNavConfig = {
    tabBarStyle: {
        backgroundColor: colors.darkGrey,
        height: 55
    },
    tabBarShowLabel: false,
    tabBarActiveTintColor: colors.white,
    tabBarInactiveTintColor: colors.lightGray,
    headerTitleStyle: {
        color: colors.darkGrey,
        textTransform: "uppercase",
        fontFamily: fonts.rad500,
        fontSize: 18
    },
    headerStyle: {
        shadowColor: "black"
    }
}

export default stackNavConfig;