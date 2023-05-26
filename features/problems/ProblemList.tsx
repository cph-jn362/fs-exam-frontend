import {
  StyleSheet,
  ScrollView,
  Text,
  View,
} from "react-native";
import { ProblemEntity } from "./ProblemEntity";
import { AppDispatch, RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllProblems } from "./ProblemSlice";

export default function ProblemList() {
  const dispatch = useDispatch<AppDispatch>();

  const problem: ProblemEntity[] = useSelector(
    (state: RootState) => state.problem.problem
  );

  useEffect(() => {
    dispatch(fetchAllProblems());
  }, []);

  return (
    <ScrollView>
      {problem?.map((problem) => (
        <View key={problem?.id}>
          <View style={styles.item}>
            <Text style={{ fontWeight: "600" }}>{problem?.subject}</Text>
            <Text>{problem?.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  item: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#D0D5DD",
    borderRadius: 5,
  },
});
