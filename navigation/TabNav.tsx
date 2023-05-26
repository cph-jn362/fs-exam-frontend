import HomeScreen from "../screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import LogoutButton from "../features/users/LogoutButton";
import { Ionicons } from "@expo/vector-icons";
import AdministrativHjælpScreen from "../features/todos/AdministrativHjælpScreen";

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Forside",
          headerTitleStyle: { fontWeight: "bold", color: "#101828" },
          headerRight: () => <LogoutButton />,
          tabBarLabel: 'Forside',
          tabBarIcon: () => (
            <Ionicons name="layers-sharp"  color={"#1A1B22"} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="AdministrativHjælp"
        component={AdministrativHjælpScreen}
        options={{
          title: "Administrativ hjælp",
          headerTitleStyle: { fontWeight: "bold", color: "#101828" },
          tabBarLabel: "Administrativ hjælp",
          tabBarIcon: () => (
            <Ionicons name="clipboard-outline" color={"#1A1B22"} size={20}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
