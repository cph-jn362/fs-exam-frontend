import {
  StyleSheet,
  Text,
  Pressable,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamList } from "../../types/ParamList";
import { useNavigation } from "@react-navigation/native";

type ProblemScreenProp = StackNavigationProp<ParamList, "Problem">;

export default function ProblemCategories() {
  const navigationProblem = useNavigation<ProblemScreenProp>();

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: 20,
      }}
    >
      <Pressable
        style={styles.category}
        onPress={() => navigationProblem.navigate("Problem")}
      >
        <Text style={styles.categoryText}>Badeværelse og køkken</Text>
        <FontAwesome5
          name="toilet"
          color={"#1A1B22"}
          size={40}
          style={{ position: "absolute", top: 20, left: 10 }}
        />
      </Pressable>
      <Pressable
        style={styles.category}
        onPress={() => navigationProblem.navigate("Problem")}
      >
        <Text style={styles.categoryText}>Skadedyr</Text>
        <Ionicons
          name="md-bug"
          color={"#1A1B22"}
          size={40}
          style={{ position: "absolute", top: 20, left: 10 }}
        />
      </Pressable>
      <Pressable
        style={styles.category}
        onPress={() => navigationProblem.navigate("Problem")}
      >
        <Text style={styles.categoryText}>Hårde hvidvarer</Text>
        <MaterialCommunityIcons
          name="washing-machine"
          color={"#1A1B22"}
          size={40}
          style={{ position: "absolute", top: 20, left: 10 }}
        />
      </Pressable>
      <Pressable
        style={styles.category}
        onPress={() => navigationProblem.navigate("Problem")}
      >
        <Text style={styles.categoryText}>Nøgler/Brikker og dørtelefon</Text>
        <Ionicons
          name="ios-key"
          color={"#1A1B22"}
          size={40}
          style={{ position: "absolute", top: 20, left: 10 }}
        />
      </Pressable>
    </View>
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
  textArea: {
    height: 150,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#D0D5DD",
    borderRadius: 5,
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
    marginBottom: 10,
    marginRight: 20,
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
  category: {
    backgroundColor: "#F2F4F7",
    borderRadius: 10,
    width: 160,
    height: 160,
    marginBottom: 20,
  },
  categoryText: {
    position: "relative",
    top: 110,
    left: 10,
    textAlign: "left",
    fontWeight: "bold",
    color: "#101828",
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
