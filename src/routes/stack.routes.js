import { createStackNavigator } from "@react-navigation/stack";
import AddNewElement from "../screens/AddNewElement";
import TabsNavigator from "./tab.routes";
import stackNavConfig from "../config/stackNavConfig";
import AddQuickWorkout from "../screens/AddQuickWorkout";

const Stack = createStackNavigator();

const StackNavigator = ()=>{
    return(
        <Stack.Navigator initialRouteName="start" screenOptions={stackNavConfig}>
            <Stack.Screen name="add" component={AddNewElement} options={{ headerTitle: "Novo elemento" }} />
            <Stack.Screen name="add-test" component={AddQuickWorkout} options={{ headerTitle: "Novo teste" }} />
            <Stack.Screen name="start" component={TabsNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default StackNavigator;