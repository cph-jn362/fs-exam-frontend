import { TodoEntity } from "./TodoEntity";
import { usePostTodo } from "./TodoHooks";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
} from "react-native";
import {  useQueryClient } from "@tanstack/react-query";
import { useState } from "react";


export default function TodoScreen() {
 

  const [text, setText] = useState("");
  const queryClient = useQueryClient();
  const { mutate: createTodo } = usePostTodo();

  const handleAddTodo = () => {
    const todoEntity: TodoEntity = new TodoEntity(text, false);
    createTodo(todoEntity, {
      onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todo"] }),
    });
  };

  return (
    <View>
      <ScrollView style={styles.view}>
        <Text style={styles.header1}>Kontakt os om bytte og fremleje</Text>
        <Text style={styles.description}>
          Overvejer du at bytte eller fremleje din lejebolig til anden, så kan
          du indsende blanket eller stille spørgsmål på denne side.
        </Text>
        <Text style={styles.header2}>Fremleje</Text>
        <Text style={styles.paragraph}>
          Reglerne for at fremleje fremgår af almene lejelovens §64, og her
          fremgår det, at man har har ret til at fremleje boligen i indtil 2 år,
          når lejeres fravær er midlertidigt og skyldes sygdom,
          forretningsrejse, studieophold, midlertidig forflyttelse eller
          lignende.
        </Text>
        <Text style={styles.paragraph}>
          Overvejer du at fremleje din lejebolig, så kan du benytte formularen
          som du finder under Emne - Ansøgning om fremleje.
        </Text>
        <Text style={styles.header2}>Bytte</Text>
        <Text style={styles.paragraph}>
          Reglerne for at bytte fremgår af almene lejelovens §69, og her fremgår
          det, at det kræver at den fraflyttede lejer skal have beboet lejemålet
          minimum 3 år for at bytte kan komme på tale. Overvejer du at bytte din
          lejebolig til en anden lejebolig så kan du benytte formularen som du
          finder under Emne - Ansøgning om boligbytte.
        </Text>
        <Text style={styles.label}>Min henvendelse drejer sig om... *</Text>
        <TextInput
          placeholder="Beskriv dit problem så godt du kan.."
          style={styles.textArea}
          multiline={true}
          numberOfLines={4}
          onChangeText={setText}
          value={text}
        />
        <Pressable style={styles.button} onPress={handleAddTodo}>
          <Text style={styles.buttonText}>Næste →</Text>
        </Pressable>
      </ScrollView>
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
    textAlign: "center",
    textTransform : "uppercase"
  },
  header1: {
    flex: 0,
    marginTop: 50,
    marginBottom: 20,
    color: "#101828",
    fontWeight: "600",
    fontSize: 30,
  },
  header2: {
    flex: 0,
    marginTop: 50,
    marginBottom: 20,
    color: "#101828",
    fontWeight: "600",
    fontSize: 20,
  },
  description: {
    marginBottom: 10,
    color: "#667085",
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 22,
  },
  paragraph : {
    marginBottom: 20,
    color: "#101828",
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 22,
  }
});
