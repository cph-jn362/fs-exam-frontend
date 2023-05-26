import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { logout } from "./UserSlice";
import { RootState, AppDispatch } from "../../store";
import { UserEntity } from "./UserEntity";
import * as SecureStore from "expo-secure-store";

export default function LogoutButton() {
  const token: string | undefined | null = useSelector(
    (state: RootState) => state.user.token
  );

  const dispatch = useDispatch<AppDispatch>();

  const logoutAccount = () => {
    dispatch(logout());
  };

  return (
    <View>
      <Pressable onPress={logoutAccount}>
        <Text style={styles.buttonText}>Log ud</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    margin: 20,
  },
  buttonText: {
    marginRight: 10,
    backgroundColor: "#A5ED7B",
    color: "#1A1B22",
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 12,
    paddingLeft: 12,
    borderRadius: 8,
    textAlign: "center",
    fontWeight: "600",
  }
});
