import { Image, View, Text } from "react-native";
import styles from "../styles/components/NotFoundList";
import iconList from "../assets/icons/list.png";

const NotFoundList = ()=>{
    return(
        <View style={styles.container}>
            <Image 
                style={styles.image}
                source={iconList}
            />
            <View style={styles.containerTexts}>
                <Text style={styles.textMain}>
                    Lista vazia!
                </Text>
                <Text style={styles.textSub}>
                    Adicionar novos elementos.
                </Text>
            </View>
        </View>
    );
}

export default NotFoundList;