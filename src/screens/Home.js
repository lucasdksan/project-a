import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "../styles/screens/Home";
import stylesBtn from "../styles/components/AddNewElementBtn";
import NotFoundList from "../components/NotFoundList";
import BtnCommon from "../components/BtnCommon";

const Home = ()=>{
    const navigation = useNavigation();

    return(
        <SafeAreaView style={styles.container}>
            <NotFoundList />
            <BtnCommon onPress={()=> navigation.navigate("add")} styles={stylesBtn.btnContainer}>
                <Icon name="add" size={28} color="#fff"/>
            </BtnCommon>
        </SafeAreaView>
    );
}

export default Home;