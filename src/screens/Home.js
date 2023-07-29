import { View } from "react-native";
import styles from "../styles/screens/Home";
import CountDown from "../components/CountDown";

const Home = ()=>{
    return(
        <View style={styles.container}>
            <CountDown />
        </View>
    );
}

export default Home;