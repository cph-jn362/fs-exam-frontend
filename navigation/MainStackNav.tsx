import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import TodoScreen from "../features/todos/TodoScreen";
import TabNav from "./TabNav";
import BeboerServiceScreen from "../features/problems/BeboerServiceScreen";
import AdministrativHjælpScreen from "../features/todos/AdministrativHjælpScreen";
import ProblemScreen from "../features/problems/ProblemScreen";
import DrawerNav from "./DrawerNav";

const Stack = createSharedElementStackNavigator();

export default function MainStackNav() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
    >
      {/* <Stack.Screen
        name="Tab"
        component={TabNav}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
      name="Drawer"
      component={DrawerNav}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitleStyle: { fontWeight: "bold", color: "#101828" },
        }}
      />
      <Stack.Screen
        name="BeboerService"
        component={BeboerServiceScreen}
        options={{
          title: "Beboerservice",
          headerTitleStyle: { fontWeight: "bold", color: "#101828" },
        }}  
      />
      <Stack.Screen
        name="Problem"
        component={ProblemScreen}
        options={{
          headerShown: true,
          title: "Beboerservice",
          headerTitleStyle: { fontWeight: "bold", color: "#101828" },
        }}  
      />
        <Stack.Screen
        name="AdministrativHjælp"
        component={AdministrativHjælpScreen}
        options={{
          title: "Administrativ hjælp",
          headerTitleStyle: { fontWeight: "bold", color: "#101828" },
        }}
      />
      <Stack.Screen
        name="Todo"
        component={TodoScreen}
        options={{
          headerShown: true,
          title: "Administrativ hjælp",
          headerTitleStyle: { fontWeight: "bold", color: "#101828" },
        }}
      />
    </Stack.Navigator>
  );
}
