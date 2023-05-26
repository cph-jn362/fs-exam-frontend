import {
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { login, updateToken } from "./UserSlice";
import { RootState, AppDispatch } from "../../store";
import { UserEntity } from "./UserEntity";
import * as SecureStore from "expo-secure-store";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamList } from "../../types/ParamList";

type SignupScreenProp = StackNavigationProp<ParamList, "Signup">;
type SignupBoardmemberScreenProp = StackNavigationProp<ParamList, "SignupBoardmember">;


export default function LoginScreen() {
  const navigationSignup = useNavigation<SignupScreenProp>();
  const navigationSignupBoardmember = useNavigation<SignupBoardmemberScreenProp>();

  const error: string | undefined = useSelector(
    (state: RootState) => state.user.error
  );
  const dispatch = useDispatch<AppDispatch>();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginAccount = (e: any) => {
    e.preventDefault();
    if (username == "" || password == "") {
      alert("Indtast dit brugernavn og adgangskode");
      return;
    }
    dispatch(login(new UserEntity(username, password)));
  };

  useEffect(() => {
    const asyncFunc = async () => {
      const token = await SecureStore.getItemAsync("token");
      dispatch(updateToken(token));
    };
    asyncFunc();
  }, []);

  return (
    <ScrollView style={styles.view}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.description}>
        Indtast dine oplysninger og log ind.
      </Text>
      <Text style={styles.label}>Brugernavn</Text>
      <TextInput
        placeholder="Indtast dit brugernavn"
        style={styles.textInput}
        onChangeText={setUsername}
        value={username}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        placeholder="••••••••"
        style={styles.textInput}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <Pressable style={styles.button} onPress={loginAccount}>
        <Text style={styles.buttonText}>Log ind</Text>
      </Pressable>
      <Text>{error}</Text>
      <Text style={styles.link}>Har du ikke en konto?</Text>
      <View style={{flex: 1, flexDirection: "row", justifyContent: "center", marginTop: 10, marginBottom: 200}}>
      <Pressable onPress={() => navigationSignup.navigate("Signup")} style={styles.signupLink}>
        <Text style={styles.signupLinkText}>Lav standard konto</Text>
      </Pressable>
      <Pressable onPress={() => navigationSignupBoardmember.navigate("SignupBoardmember")}>
        <Text style={styles.signupLinkText}>Tilmeld som admin</Text>
      </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view: {
    margin: 20,
  },
  button: {
    marginTop: 30,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "#101828",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
  },
  signupLink: {
    marginRight: 10
  },
  signupLinkText: {
    color: "#667085",
    textAlign: "center",
    fontWeight: "600",
    textDecorationLine: "underline",
  },
  textInput: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#D0D5DD",
    borderRadius: 5,
  },
  label: {
    marginTop: 20,
    color: "#101828",
    fontWeight: "500",
  },
  title: {
    flex: 0,
    marginTop: 50,
    marginBottom: 20,
    color: "#101828",
    fontWeight: "600",
    fontSize: 25,
  },
  link: {
    textAlign: "center",
    marginRight: 5,
    marginTop: 20,
  },
  description: {
    flex: 0,
    marginBottom: 20,
    color: "#667085",
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 22,
  },
});
