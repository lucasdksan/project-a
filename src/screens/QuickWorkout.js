import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import BtnCommon from "../components/BtnCommon";
import NotFoundList from "../components/NotFoundList";
import styles from "../styles/screens/QuickWorkout";
import stylesBtn from "../styles/components/AddNewElementBtn";

const QuickWorkout = ()=>{
    const navigation = useNavigation();

    return(
        <SafeAreaView style={styles.container}>
            <NotFoundList />
            <BtnCommon onPress={()=> navigation.navigate("add-test")} styles={stylesBtn.btnContainer}>
                <Icon name="add" size={28} color="#fff"/>
            </BtnCommon>
        </SafeAreaView>
    );
}

export default QuickWorkout;