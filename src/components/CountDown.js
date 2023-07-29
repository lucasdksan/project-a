import { useContext } from "react";
import { View, Text } from "react-native";
import styles from "../styles/components/CountDown";
import { CountDownContext } from "../contexts/countdown/CountDownContext";

const CountDown = () => {
    const { minutes, seconds } = useContext(CountDownContext);
    const [ minuteLeft, minuteRight]  = String(minutes).padStart(2,'0').split('');
    const [ secondsLeft, secondsRight]  = String(seconds).padStart(2,'0').split('');

    return (
        <View style={styles.container}>
            <View style={styles.containerNumber}>
                <Text style={styles.number}>{minuteLeft}</Text>
                <Text style={styles.number}>{minuteRight}</Text>
            </View>
            <Text style={styles.point}>:</Text>
            <View style={styles.containerNumber}>
                <Text style={styles.number}>{secondsLeft}</Text>
                <Text style={styles.number}>{secondsRight}</Text>
            </View>
        </View>
    );
}

export default CountDown;