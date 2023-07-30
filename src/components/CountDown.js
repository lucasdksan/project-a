import { useContext } from "react";
import { View, Text, Button } from "react-native";
import styles from "../styles/components/CountDown";
import { CountDownContext } from "../contexts/countdown/CountDownContext";

const CountDown = () => {
    const { minutes, seconds, hasFinished, startCountdown } = useContext(CountDownContext);
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

    return (
        <>
            <View style={styles.container}>
                <View style={styles.containerNumber}>
                    <View style={styles.containerNumberChildren}>
                        <Text style={styles.number}>{minuteLeft}</Text>
                    </View>
                    <View style={styles.containerNumberChildren}>
                        <Text style={styles.number}>{minuteRight}</Text>
                    </View>
                </View>
                <Text style={styles.point}>:</Text>
                <View style={styles.containerNumber}>
                    <View style={styles.containerNumberChildren}>
                        <Text style={styles.number}>{secondsLeft}</Text>
                    </View>
                    <View style={styles.containerNumberChildren}>
                        <Text style={styles.number}>{secondsRight}</Text>
                    </View>
                </View>
            </View>
            {
                hasFinished ? (
                    <Text>Concluído</Text>
                ) : (
                    <>
                        <Button title="Iniciar um ciclo" onPress={startCountdown} />
                    </>
                )
            }
        </>
    );
}

export default CountDown;