import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import Home from "../screens/Home";
import QuickWorkout from "../screens/QuickWorkout";

const Tab = createBottomTabNavigator();

const TabsNavigator = ()=>{
    return(
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "#2c3e50",
                    height: 55
                },
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#fff",
                tabBarInactiveTintColor: "#dcdde1",
                headerTitleStyle: {
                    color: "#2c3e50",
                    textTransform: "uppercase",
                    fontFamily: "Rajdhani_500Medium",
                    fontSize: 18
                },
                headerStyle: {
                    shadowColor: "black"
                }
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                    tabBarIcon: (({size, color})=>( <Icon name="home" size={size} color={color} /> ))
                }}
            />
            <Tab.Screen 
                name="Teste Rápido" 
                component={QuickWorkout}
                options={{
                    tabBarIcon: (({size, color})=>( <Icon name="pencil" size={size} color={color} /> ))
                }}
            />
        </Tab.Navigator>
    );
}   

export default TabsNavigator;