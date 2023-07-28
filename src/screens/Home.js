import { View, Text } from "react-native";
import styles from "../styles/screens/Home";

const Home = ()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Apenas um texto
            </Text>
        </View>
    );
}

export default Home;