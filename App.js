import { StatusBar } from "react-native";
import CountDownProvider from "./src/contexts/countdown/CountDownProvider";
import Routes from "./src/routes";
import loadedFonts from "./src/libs/loadedFonts";

export default function App() {
  const { fontsLoaded } = loadedFonts();
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
      <CountDownProvider>
        <Routes />
      </CountDownProvider>
    </>
  );
};
