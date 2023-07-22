import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Karla_400Regular,
  Karla_700Bold,
} from "@expo-google-fonts/karla";
import { THEME } from "./src/theme";
import { NativeBaseProvider } from "native-base";
import { Loading } from "./src/components/Loading";
import { SingUp } from "./src/screens/SingUp";

export default function App() {
  let [fontsLoaded] = useFonts({
    Karla_700Bold,
    Karla_400Regular,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar style="dark" translucent backgroundColor="transparent" />
      {fontsLoaded ? <SingUp /> : <Loading />}
    </NativeBaseProvider>
  );
}