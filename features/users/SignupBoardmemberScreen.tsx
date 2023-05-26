import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { BoardmemberEntity } from "./BoardmemberEntity";
import { signupBoardmember } from "./UserSlice";
import { ScrollView } from "react-native-gesture-handler";

export default function signupBoardmemberScreen() {
  const dispatch = useDispatch<AppDispatch>();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const signupBoardmemberAccount = (e: any) => {
    e.preventDefault();
    if (username == "" || password == "" || phone == "") {
      alert("Indtast brugernavn, adgangskode & telefonnummer");
      return;
    }
    dispatch(
      signupBoardmember(new BoardmemberEntity(username, password, phone))
    );
  };

  return (
    <ScrollView style={styles.view}>
      <Text style={styles.title}>Signup som Admin</Text>
      <Text style={styles.description}>
        Indtast dine oplysninger og lav en admin konto.
      </Text>
      <Text style={styles.label}>Email</Text>
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
      <Text style={styles.label}>Telefon</Text>
      <TextInput
        placeholder="Indtast et telefonnummer"
        style={styles.textInput}
        value={phone}
        onChangeText={setPhone}
      />
      <Pressable
        style={{
          marginTop: 30,
          marginBottom: 200,
          paddingTop: 15,
          paddingBottom: 15,
          backgroundColor: "#101828",
          borderRadius: 5,
        }}
        onPress={signupBoardmemberAccount}
      >
        <Text style={styles.buttonText}>Sign up</Text>
      </Pressable>
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
  },
});
