import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
  Button,
} from "react-native";
import React, { useEffect } from "react";
import { AppDispatch, RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import * as SecureStore from "expo-secure-store";
import { updateToken } from "../features/users/UserSlice";
import { ParamList } from "../types/ParamList";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type AdministrativHjælpScreenProp = StackNavigationProp<
  ParamList,
  "AdministrativHjælp"
>;
type BeboerServiceScreenProp = StackNavigationProp<ParamList, "BeboerService">;

export default function HomeScreen() {
  const navigationAdministrativHjælp =
    useNavigation<AdministrativHjælpScreenProp>();
  const navigationBeboerService = useNavigation<BeboerServiceScreenProp>();

  return (
    <ScrollView style={styles.view}>
      <TextInput
        placeholder="Søg efter dokumenter, artikler m.m"
        style={styles.textInput}
      />
      <Pressable style={styles.searchIcon}>
        <Ionicons name="search-sharp" color={"#1A1B22"} size={25} />
      </Pressable>
      <Text style={styles.title}>Genveje</Text>
      <View style={styles.shortcutView}>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            name="hammer"
            color={"#1A1B22"}
            size={40}
            />
          <View style={{marginLeft: 10}}>
            <Text
              style={styles.shortcut}
              onPress={() => navigationBeboerService.navigate("BeboerService")}
            >
              Beboberservice
            </Text>
            <Text style={styles.shortcutText}>
              Reparationer, forbedringer, fejl og mangler...
            </Text>
          </View>
        </View>
        <Ionicons
          name="chevron-forward"
          color={"#1A1B22"}
          size={25}
          style={styles.arrowIcon}
        />
      </View>
      <View style={styles.shortcutView}>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <MaterialCommunityIcons name="clipboard" color={"#1A1B22"} size={40}/>
          <View style={{marginLeft: 10}}>
            <Text
              style={styles.shortcut}
              onPress={() =>
                navigationAdministrativHjælp.navigate("AdministrativHjælp")
              }
            >
              Administrativ Hjælp
            </Text>
            <Text style={styles.shortcutText}>
              Tilladelser, fremleje, opsigelse, betalingss...
            </Text>
          </View>
        </View>
        <Ionicons
          name="chevron-forward"
          color={"#1A1B22"}
          size={25}
          style={styles.arrowIcon}
        />
      </View>
      <View style={styles.shortcutView}>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <MaterialCommunityIcons name="inbox-arrow-down" color={"#1A1B22"} size={40}/>
          <View style={{marginLeft: 10}}>
            <Text
              style={styles.shortcut}
            >
              Indbakke
            </Text>
            <Text style={styles.shortcutText}>
            Notifikationer, beskeder, påmindelser...
            </Text>
          </View>
        </View>
        <Ionicons
          name="chevron-forward"
          color={"#1A1B22"}
          size={25}
          style={styles.arrowIcon}
        />
      </View>
      <View style={styles.shortcutView}>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <MaterialCommunityIcons name="door-open" color={"#1A1B22"} size={40}/>
          <View style={{marginLeft: 10}}>
            <Text
              style={styles.shortcut}
            >
              Hjælpeartikler
            </Text>
            <Text style={styles.shortcutText}>
            Retningslinier, guides, svar på spørgsmål mm.
            </Text>
          </View>
        </View>
        <Ionicons
          name="chevron-forward"
          color={"#1A1B22"}
          size={25}
          style={styles.arrowIcon}
        />
      </View>
      <View style={styles.shortcutView}>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <MaterialCommunityIcons name="home" color={"#1A1B22"} size={40}/>
          <View style={{marginLeft: 10}}>
            <Text
              style={styles.shortcut}
            >
              Min bolig
            </Text>
            <Text style={styles.shortcutText}>
            Personlige dokumenter, forbrug mm..
            </Text>
          </View>
        </View>
        <Ionicons
          name="chevron-forward"
          color={"#1A1B22"}
          size={25}
          style={styles.arrowIcon}
        />
      </View>
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
  signupLink: {
    color: "#667085",
    textDecorationLine: "underline",
    marginLeft: 5,
    marginTop: 5,
    textAlign: "center",
  },
  textInput: {
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    backgroundColor: "#F3F3F3",
    borderWidth: 1,
    borderColor: "#D0D5DD",
    borderRadius: 70,
  },
  label: {
    marginTop: 20,
    color: "#101828",
    fontWeight: "500",
  },
  title: {
    flex: 0,
    marginTop: 50,
    marginBottom: 10,
    color: "#667085",
    fontWeight: "400",
    fontSize: 25,
  },
  shortcutView: {
    borderBottomColor: "#D3D3D3",
    borderBottomWidth: 1,
    paddingBottom: 15,
  },
  shortcut: {
    flex: 0,
    marginTop: 20,
    marginBottom: 5,
    color: "#101828",
    fontWeight: "600",
    fontSize: 25,
  },
  shortcutText: {
    color: "#667085",
  },
  link: {
    textAlign: "center",
  },
  arrowIcon: {
    position: "absolute",
    alignSelf: "flex-end",
    top: 22,
  },
  searchIcon: {
    position: "absolute",
    top: 16,
    alignSelf: "flex-end",
    right: 7,
    backgroundColor: "#A5ED7B",
    padding: 10,
    borderRadius: 50,
  },
});
