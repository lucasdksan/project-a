import { SafeAreaView } from "react-native";
import styles from "../styles/screens/Home";
import NotFoundList from "../components/NotFoundList";

const Home = ()=>{
    return(
        <SafeAreaView style={styles.container}>
            <NotFoundList />
        </SafeAreaView>
    );
}

export default Home;