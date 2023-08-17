import { SafeAreaView, TextInput, View, Text, KeyboardAvoidingView } from "react-native";
import Checkbox from "expo-checkbox";
import styles from "../styles/screens/AddNewElement";

const AddNewElement = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Nome do Elemento</Text>
                <TextInput />
            </View>
            <View>
                <Text>Horas disponíveis</Text>
                <TextInput />
            </View>
            <View>
                <View>
                    <Text>Selecione os dias disponíveis</Text>
                </View>
                <View>
                    <View>
                        <Checkbox />
                        <Text>Segunda</Text>
                    </View>
                    <View>
                        <Checkbox />
                        <Text>Terça</Text>
                    </View>
                    <View>
                        <Checkbox />
                        <Text>Quarta</Text>
                    </View>
                    <View>
                        <Checkbox />
                        <Text>Quinta</Text>
                    </View>
                    <View>
                        <Checkbox />
                        <Text>Sexta</Text>
                    </View>
                    <View>
                        <Checkbox />
                        <Text>Sabado</Text>
                    </View>
                    <View>
                        <Checkbox />
                        <Text>Domingo</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default AddNewElement;