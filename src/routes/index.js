import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./stack.routes";

const Routes = ()=>{
    return(
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    );
}

export default Routes;