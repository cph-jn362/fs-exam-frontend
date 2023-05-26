import { StyleSheet, ScrollView, Text, View } from "react-native";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAllProblems } from "./ProblemSlice";
import ProblemList from "./ProblemList";
import ProblemCategories from "./ProblemCategories";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function BeboerServiceScreen() {
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

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAllProblems());
  }, []);

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
          <TouchableOpacity style={styles.label} onPress={showCategories}>
            <Text>Kategorier</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.label} onPress={showCases}>
            <Text>Mine sager</Text>
          </TouchableOpacity>
        </View>
        {categories ? <ProblemCategories /> : null}
        {cases ? <ProblemList /> : null}
      </ScrollView>
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
