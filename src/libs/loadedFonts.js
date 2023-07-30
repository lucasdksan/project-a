import { 
        useFonts, 
        Rajdhani_300Light, 
        Rajdhani_400Regular, 
        Rajdhani_500Medium, 
        Rajdhani_600SemiBold, 
        Rajdhani_700Bold
    } from "@expo-google-fonts/rajdhani";

function loadedFonts(){
    const [fontsLoaded] = useFonts({
        Rajdhani_300Light, 
        Rajdhani_400Regular, 
        Rajdhani_500Medium, 
        Rajdhani_600SemiBold, 
        Rajdhani_700Bold
    });
    
    return { fontsLoaded };
}

export default loadedFonts;