import { StatusBar } from "expo-status-bar";
import { useFonts, Rajdhani_300Light, Rajdhani_400Regular, Rajdhani_500Medium, Rajdhani_600SemiBold, Rajdhani_700Bold } from "@expo-google-fonts/rajdhani";
import Home from "./src/screens/Home";
import CountDownProvider from "./src/contexts/countdown/CountDownProvider";

export default function App() {
  const [fontsLoaded] = useFonts({
    Rajdhani_300Light, 
    Rajdhani_400Regular, 
    Rajdhani_500Medium, 
    Rajdhani_600SemiBold, 
    Rajdhani_700Bold
  });
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />
      <CountDownProvider>
        <Home />
      </CountDownProvider>
    </>
  );
};
