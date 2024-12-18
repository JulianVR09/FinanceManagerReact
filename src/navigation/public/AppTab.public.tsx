import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import TabBarIcon from "../hook/TabBarIcon";
import Login from "../../screen/login/Login.screen";
import Singup from "../../screen/singup/Singup.screen";
import { MainScreen } from "../../types/mainScreen";

const Tab = createBottomTabNavigator<MainScreen>();

export const AppTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Login"
      screenOptions={({ route }) => ({
        tabBarIcon: () => <TabBarIcon routeName={route.name} />,
        tabBarActiveTintColor: '#070707',
        tabBarInactiveTintColor: '#070707',
        tabBarStyle: {
          backgroundColor: '#FFFCEB',
          height: 55,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: { fontSize: 9, color: '#070707' },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Singup" component={Singup} />
    </Tab.Navigator>
  );
};
