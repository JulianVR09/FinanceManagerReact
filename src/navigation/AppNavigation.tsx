import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { MainScreen } from '../types/mainScreen'
import Home from '../screen/home/Home.screen'
import { AppTab } from './AppTab'
import OnBoarding from '../screen/onBoarding/Onboarding.screen'


const Stack = createNativeStackNavigator<MainScreen>()

const AppNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Onboarding'>
            <Stack.Screen name='Onboarding' component={OnBoarding} options={{headerShown: false}}/>
            <Stack.Screen name='AppTab' component={AppTab} options={{headerShown: false}}/>
            <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation