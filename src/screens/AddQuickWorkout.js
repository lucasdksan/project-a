import { RectButton } from "react-native-gesture-handler";
import { SafeAreaView, Text, View, TextInput } from "react-native";
import styles from "../styles/screens/AddQuickWorkout";
import apiGPT from "../services/apiGPT";
import Checkbox from "expo-checkbox";

const AddQuickWorkout = ()=>{
    const handlerRequest = async ()=> {
        const result = await apiGPT("T.I.");
    }

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
                <Text>Gerar uma pergunta nova?</Text>
                <View>
                    <Text>Tema para uma pergunta</Text>
                    <TextInput />
                </View>
                <View>
                    <Text>Utiliza IA</Text>
                    <Checkbox />
                </View>
            </View>
            <View>
                <RectButton onPress={handlerRequest}>
                    <Text>CONFIRMAR</Text>
                </RectButton>
                <RectButton>
                    <Text>CANCELAR</Text>
                </RectButton>
            </View>
        </SafeAreaView>
    );
}

export default AddQuickWorkout;