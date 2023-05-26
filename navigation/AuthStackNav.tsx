import { Pressable, Text } from "react-native";
import LoginScreen from "../features/users/LoginScreen";
import React from "react";
import SignupScreen from "../features/users/SignupScreen";
import WelcomeScreen from "../features/users/WelcomeScreen";
import { StyleSheet } from "react-native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import signupBoardmemberScreen from "../features/users/SignupBoardmemberScreen";
import LoginBoardmemberScreen from "../features/users/LoginBoardmemberScreen";

const Stack = createSharedElementStackNavigator();

export default function AuthStackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: "Blommegården",
          headerTitleStyle: { fontWeight: "bold", color: "#101828" },
        }}
      />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen
        name="SignupBoardmember"
        component={signupBoardmemberScreen}
        options={{
          title: "Signup Admin",
        }}
      />
    </Stack.Navigator>
  );
}
