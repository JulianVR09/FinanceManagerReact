import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import TabBarIcon from "../hook/TabBarIcon";
import { MainScreen } from "../../types/mainScreen";
import Home from "../../screen/home/Home.screen";

const Tab = createBottomTabNavigator<MainScreen>();

export const AppTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
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
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};
