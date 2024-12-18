import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainScreen } from "../../types/mainScreen";
import Login from "../../screen/login/Login.screen";
import Signup from "../../screen/singup/Singup.screen";
import { AppTab } from "./AppTab.public";
import OnBoarding from "../../screen/onBoarding/Onboarding.screen";

const Stack = createNativeStackNavigator<MainScreen>()

const PublicStack = () => {
    return (
        <Stack.Navigator initialRouteName="Onboarding">
            <Stack.Screen name="AppTab" component={AppTab} options={{headerShown: false}}/>
            <Stack.Screen name="Onboarding" component={OnBoarding} options={{headerShown: false}}/>
            <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
            <Stack.Screen name='Singup' component={Signup} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default PublicStack;