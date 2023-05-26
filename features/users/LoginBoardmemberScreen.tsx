import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  Pressable,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamList } from "../../types/ParamList";

type SignupBoardmemberScreenProp = StackNavigationProp<ParamList, "SignupBoardmember">;

export default function LoginBoardmemberScreen() {
  const navigationSignupBoardmember = useNavigation<SignupBoardmemberScreenProp>();
    
  return (
    <SafeAreaView style={styles.view}>
      <Text style={styles.title}>Login admin</Text>
      <Text style={styles.description}>
        Indtast dine oplysninger og log ind.
      </Text>  
      <Text style={styles.label}>Email</Text>
      <TextInput placeholder="Indtast din email" style={styles.textInput} />
      <Text style={styles.label}>Password</Text>
      <TextInput
        placeholder="••••••••"
        style={styles.textInput}
        secureTextEntry={true}
      />
      <Text style={styles.label}>Telefon</Text>
      <TextInput
        placeholder="Indtast dit telefonnummer"
        style={styles.textInput}
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Log ind</Text>
      </Pressable>
      <Text>token er</Text>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
        <Text style={styles.link}>Har du ikke en konto?</Text>
        <Pressable onPress={() => navigationSignupBoardmember.navigate("SignupBoardmember")}>
          <Text style={styles.signupLinkText}>Lav admin konto</Text>
        </Pressable>
      </View>
    </SafeAreaView>
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
    marginTop: 30,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#101828",
    borderRadius: 5,
  },
  signupLinkText: {
    color: "#667085",
    textDecorationLine: "underline",
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
    marginBottom: 50,
    color: "#101828",
    fontWeight: "600",
    fontSize: 25,
  },
  description: {
    flex: 0,
    marginBottom: 50,
    color: "#667085",
    fontWeight: "400",
    fontSize: 15,
  },
  link: {
    textAlign: "center",
    marginRight: 5
  },
});
