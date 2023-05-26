import { StyleSheet, View, FlatList } from "react-native";
import { useGetTodos } from "./TodoHooks";
import { TodoItem } from "./TodoItem";

export default function TodoList() {
  const { isLoading, error, data } = useGetTodos();

  return (
    <View style={styles.view}>
      {isLoading}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TodoItem
            text={item.text}
            done={item.done}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    margin: 20,
  },
});
