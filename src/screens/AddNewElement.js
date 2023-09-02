import { RectButton } from "react-native-gesture-handler";
import { SafeAreaView, TextInput, View, Text } from "react-native";
import Checkbox from "expo-checkbox";
import styles from "../styles/screens/AddNewElement";

const AddNewElement = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.text}>Nome do Elemento</Text>
                <TextInput />
            </View>
            <View>
                <Text style={styles.text}>Horas disponíveis</Text>
                <TextInput />
            </View>
            <View>
                <Text style={styles.text}>Anotações</Text>
                <TextInput />
            </View>
            <View>
                <View>
                    <Text>Selecione os dias disponíveis</Text>
                </View>
                <View>
                    <View>
                        <Text>Segunda</Text>
                        <Checkbox />
                    </View>
                    <View>
                        <Text>Terça</Text>
                        <Checkbox />
                    </View>
                    <View>
                        <Text>Quarta</Text>
                        <Checkbox />
                    </View>
                    <View>
                        <Text>Quinta</Text>
                        <Checkbox />
                    </View>
                    <View>
                        <Text>Sexta</Text>
                        <Checkbox />
                    </View>
                    <View>
                        <Text>Sabado</Text>
                        <Checkbox />
                    </View>
                    <View>
                        <Text>Domingo</Text>
                        <Checkbox />
                    </View>
                </View>
            </View>
            <View>
                <Text>Prioridade</Text>
                <Checkbox />
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

export default AddNewElement;