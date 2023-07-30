import { NavigationContainer } from "@react-navigation/native";
import TabsNavigator from "./TabsNavigator";

const Routes = ()=>{
    return(
        <NavigationContainer>
            <TabsNavigator/>
        </NavigationContainer>
    );
}

export default Routes;