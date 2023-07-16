import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import {
  useFonts,
  Karla_400Regular,
  Karla_700Bold,
} from "@expo-google-fonts/karla";
import { THEME } from "./src/theme";
import { NativeBaseProvider } from "native-base";
import { Loading } from "./src/components/Loading";
import { SingIn } from "./src/screens/SingIn";

export default function App() {
  let [fontsLoaded] = useFonts({
    Karla_700Bold,
    Karla_400Regular,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar style="dark" translucent backgroundColor="transparent" />
      {fontsLoaded ? <SingIn /> : <Loading />}
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
