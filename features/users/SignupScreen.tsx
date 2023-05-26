import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { signupTenant, signup } from "./UserSlice";
import { UserEntity } from "./UserEntity";
import { TenantEntity } from "./TenantEntity";
import { ScrollView } from "react-native-gesture-handler";

export default function SignupScreen() {
  const error: string | undefined = useSelector(
    (state: RootState) => state.user.error
  );
  const dispatch = useDispatch<AppDispatch>();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const signupAccount = (e: any) => {
    e.preventDefault();
    if (username == "" || password == "") {
      alert("Indtast brugernavn & adgangskode");
      return;
    }
    
    if (email == "") {
      dispatch(signup(new UserEntity(username, password)));
    } else {
      dispatch(signupTenant(new TenantEntity(username, password, email)));
    }
  };

  return (
    <ScrollView style={styles.view}>
      <Text style={styles.title}>Signup</Text>
      <Text style={styles.description}>
        Indtast dine oplysninger og lav en konto.
      </Text>
      <Text style={styles.label}>Username</Text>
      <TextInput
        placeholder="Indtast et brugernavn"
        style={styles.textInput}
        value={username}
        onChangeText={setUsername}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        placeholder="Indtast et adgangskode"
        style={styles.textInput}
        value={password}
        onChangeText={setPassword}
      />
      <Text style={styles.label}>
        Email (valgfrit)
      </Text>
      <TextInput
        placeholder="Indtast din email-adresse"
        style={styles.textInput}
        value={email}
        onChangeText={setEmail}
      />
      <Pressable style={{
        marginTop: 30,
        marginBottom: 200,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: "#101828",
        borderRadius: 5,
      }} onPress={signupAccount}>
        <Text style={styles.buttonText}>Sign up</Text>
      </Pressable>
      <Text>{error}</Text>
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
  description: {
    flex: 0,
    marginBottom: 20,
    color: "#667085",
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 22,
  },
});
