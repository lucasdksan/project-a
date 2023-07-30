import { useEffect, useState } from "react";
import { CountDownContext } from "./CountDownContext";

let countdownTimeout;

const CountDownProvider = ({children})=>{
    const [ time, setTime ] = useState(0.2*60);
    const [ isActive, setIsActive ] = useState(false);
    const [ hasFinished, setHasFinished ] = useState(false);
    const minutes = Math.floor(time/60);
    const seconds = time % 60;

    function startCountdown(){ setIsActive(true); }
    function stopCountdown(){ setIsActive(false); }

    useEffect(()=>{
        if(isActive && (time > 0) ){
            countdownTimeout = setTimeout(()=>{
                setTime(time-1);
            }, 1000);
        } else if(isActive && time === 0){
            setTime(5*60);
            setHasFinished(false);
            setIsActive(true);
        }
    },[isActive, time]);

    return(
        <CountDownContext.Provider value={{ minutes, seconds, hasFinished, isActive, startCountdown, stopCountdown }} >
            { children }
        </CountDownContext.Provider>
    );
}

export default CountDownProvider;