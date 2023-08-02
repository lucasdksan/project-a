import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import Home from "../screens/Home";
import QuickWorkout from "../screens/QuickWorkout";
import tabNavConfig from "../config/tabNavConfig";

const Tab = createBottomTabNavigator();

const TabsNavigator = ()=>{
    return(
        <Tab.Navigator initialRouteName="Home" screenOptions={tabNavConfig}>
            <Tab.Screen 
                name="home" 
                component={Home}
                options={{ tabBarIcon: (({size, color})=>( <Icon name="home" size={size} color={color} /> )), headerTitle: "Home" }}
            />
            <Tab.Screen 
                name="quick"
                component={QuickWorkout}
                options={{ tabBarIcon: (({size, color})=>( <Icon name="pencil" size={size} color={color} /> )), headerTitle: "Teste Rápido" }}
            />
        </Tab.Navigator>
    );
}   

export default TabsNavigator;