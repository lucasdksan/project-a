import { RectButton } from "react-native-gesture-handler";
import { SafeAreaView, Text, View, TextInput } from "react-native";
import styles from "../styles/screens/AddQuickWorkout";

const AddQuickWorkout = ()=>{
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Pergunta</Text>
                <TextInput />
            </View>
            <View>
                <Text>Resposta</Text>
                <TextInput />
            </View>
            <View>
                <RectButton>
                    <Text>CANCELAR</Text>
                </RectButton>
                <RectButton>
                    <Text>CONFIRMAR</Text>
                </RectButton>
            </View>
        </SafeAreaView>
    );
}

export default AddQuickWorkout;