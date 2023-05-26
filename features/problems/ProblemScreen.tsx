import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  View,
  Image,
  ScrollView,
} from "react-native";
import { Picture } from "./Picture";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { RootState, AppDispatch } from "../../store";
import { createProblem } from "./ProblemSlice";
import { ProblemEntity } from "./ProblemEntity";
import { Ionicons } from "@expo/vector-icons";


export default function ProblemScreen() {

  const token: string | undefined | null = useSelector(
      (state: RootState) => state.user.token
    );
  const [camera, setCamera] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const [photoToDisplay, setPhotoToDisplay] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(`subject: ${subject}, description: ${description}`);

    dispatch(
      createProblem(new ProblemEntity(subject, description, photoToDisplay))
    );
  };



  return (
    <ScrollView style={styles.view}>
      {camera ? (
        <Picture
          setCamera={setCamera}
          setPhotoToDisplay={setPhotoToDisplay}
        ></Picture>
      ) : (
        <>
          <Text style={styles.title}>Beskriv din udfordring</Text>
          <Text style={styles.description}>
            Fortæl din vicevært hvad der er galt. Når du har oprettet sagen,
            bliver den sendt afsted, og du vil blive kontaktet.
          </Text>
          <Text style={styles.label}>Emne</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setSubject}
            value={subject}
          />
          <Text style={styles.label}>Beskrivelse</Text>
          <TextInput
            placeholder="Beskriv dit problem så godt du kan.."
            style={styles.textInput}
            onChangeText={setDescription}
            value={description}
          />
          <Text style={styles.label}>Tilføj billede</Text>
          <Pressable style={styles.buttonCamera} onPress={() => setCamera(true)}>
          <Ionicons
              name="copy-sharp"
              color={"#1A1B22"}
              size={20}
              style={{alignSelf: "center"}}
            />
            <Text style={styles.buttonCameraText}>Klik for at uploade billede</Text>
            <Text style={styles.buttonCameraDescription}>PNG, JPEG eller JPG (max. 40 mb)</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Næste →</Text>
          </Pressable>
        </>
      )}

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
  buttonCamera:{
    marginTop: 10,
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#D0D5DD",
  },
  buttonCameraText:{
    textAlign: "center",
    fontWeight: "600",
  },
  buttonCameraDescription: {
    color: "#667085",
    fontWeight: "500",
    textAlign: "center",
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
    lineHeight: 22,
  },
});
