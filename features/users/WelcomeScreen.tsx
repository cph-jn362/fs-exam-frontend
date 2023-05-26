import { Text, SafeAreaView, Pressable, View, StyleSheet } from "react-native";
import LoginScreen from "./LoginScreen";
import LoginBoardmemberScreen from "./LoginBoardmemberScreen";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamList } from "../../types/ParamList";

type LoginScreenProp = StackNavigationProp<ParamList, "Login">;
type LoginBoardmemberScreenProp = StackNavigationProp<
  ParamList,
  "LoginBoardmember"
>;

export default function WelcomeScreen() {
  const navigationLogin = useNavigation<LoginScreenProp>();
  const navigationLoginBoardmember =
    useNavigation<LoginBoardmemberScreenProp>();

  return (
    <SafeAreaView style={styles.view}>
      <Text style={styles.title}>Velkommen!</Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Pressable onPress={() => navigationLogin.navigate("Login")} style={styles.signupLink}>
          <Text style={styles.signupLinkText}>Log ind som bruger</Text>
        </Pressable>
        <Pressable onPress={() => navigationLoginBoardmember.navigate("LoginBoardmember")} style={styles.signupLink}>
          <Text style={styles.signupLinkText}>Log ind som admin</Text>
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
      color: "white",
      textAlign: "center",
      fontWeight: "600",
    },
    title: {
      flex: 0,
      marginTop: 50,
      marginBottom: 50,
      color: "#101828",
      fontWeight: "600",
      fontSize: 25,
      textAlign: "center",
    },
  });
  