import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  Pressable,
  View,
  Image,
  FlatList,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { ParamList } from "../../types/ParamList";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useGetTodos } from "./TodoHooks";
import TodoList from "./TodoList";
import TodoCategories from "./TodoCategories";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function AdministrativHjælpScreen() {
  const [cases, setCases] = useState(false);
  const [categories, setCategories] = useState(true);

  function showCases() {
    setCases(true);
    setCategories(false);
  }

  function showCategories() {
    setCases(false);
    setCategories(true);
  }
  return (
    <View>
      <ScrollView style={styles.view}>
        <Text style={styles.title}>Vælg en kategori</Text>
        <Text style={styles.description}>
          Vælg en kategori for hvad din reparation omhandler eller vælg Andet,
          hvis der ikke er en dækkende kategori.
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            borderBottomColor: "#D3D3D3",
            borderBottomWidth: 1,
          }}
        >
          <TouchableOpacity onPress={showCategories}>
            <Text style={styles.label}>Kategorier</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={showCases}>
            <Text style={styles.label}>Mine sager</Text>
          </TouchableOpacity>
        </View>
        {categories ? <TodoCategories /> : null}
      </ScrollView>
      {cases ? <TodoList /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    margin: 20,
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
  description: {
    flex: 0,
    marginBottom: 20,
    color: "#667085",
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 22,
  },
});
