import { View, Text, StyleSheet } from "react-native";

export const TodoItem = (props: any) => {
  return (
    <View>
      <Text style={styles.item}>
        {props.done.toString()} - {props.text}
      </Text>
    </View>
  );
};

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
})