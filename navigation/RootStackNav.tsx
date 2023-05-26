import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import MainStackNav from "./MainStackNav";
import AuthStackNav from "./AuthStackNav";

const ScreenBackground = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  },
};

export default function RootStackNav() {
  const token: string | undefined | null = useSelector(
    (state: RootState) => state.user.token
  );

  return (
    <NavigationContainer theme={ScreenBackground}>
      {token === null ? <AuthStackNav /> : <MainStackNav />}
    </NavigationContainer>
  );
}
