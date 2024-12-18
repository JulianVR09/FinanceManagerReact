import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainScreen } from "../../types/mainScreen";
import Home from "../../screen/home/Home.screen";
import { AppTab } from "./AppTab.private";



const Stack = createNativeStackNavigator<MainScreen>()

const PrivateStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="AppTab" component={AppTab} options={{headerShown: false}}/>
            <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
            
        </Stack.Navigator>
    )
}

export default PrivateStack;