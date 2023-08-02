import { RectButton } from "react-native-gesture-handler";
import stylesBtn from "../styles/components/BtnCommon";

const BtnCommon = ({ children, styles, onPress })=>{
    const style = { ...stylesBtn.container, ...styles };

    return(
        <RectButton onPress={onPress} style={style}>
            { children }
        </RectButton>
    );
}

export default BtnCommon;