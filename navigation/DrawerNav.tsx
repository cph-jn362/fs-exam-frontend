import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import LogoutButton from "../features/users/LogoutButton";
import AdministrativHjælpScreen from "../features/todos/AdministrativHjælpScreen";
import BeboerServiceScreen from "../features/problems/BeboerServiceScreen";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function DrawerNav() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: { marginLeft: 10 },
        headerRight: () => <LogoutButton />,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Forside",
          headerTitleStyle: { fontWeight: "bold", color: "#101828" },
          drawerIcon: () => (
            <Ionicons name="layers-sharp" color={"#1A1B22"} size={20} />
          ),
        }}
      />
      <Drawer.Screen
        name="BeboerService"
        component={BeboerServiceScreen}
        options={{
          title: "Beboerservice",
          drawerIcon: () => (

          <Ionicons name="hammer" color={"#1A1B22"} size={20} />

          ),
        }}
      />
            <Drawer.Screen
        name="AdministrativHjælp"
        component={AdministrativHjælpScreen}
        options={{
          title: "Administrativ Hjælp",
          drawerIcon: () => (
            <MaterialCommunityIcons
            name="clipboard-list"
            color={"#1A1B22"}
            size={20}
          />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
