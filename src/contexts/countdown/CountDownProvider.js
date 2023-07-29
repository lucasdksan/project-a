import { useEffect, useState } from "react";
import { CountDownContext } from "./CountDownContext";

let countdownTimeout;

const CountDownProvider = ({children})=>{
    const [ time, setTime ] = useState(2500*60);
    const [ isActive, setIsActive ] = useState(false);
    const [ hasFinished, setHasFinished ] = useState(false);
    const minutes = Math.floor(time/60);
    const seconds = time % 60;

    function startCountdown(){
        setIsActive(true);
    }

    function resetCountdown(){
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setHasFinished(false);
        setTime(0.1*60);
    }

    useEffect(()=>{
        if(isActive && (time > 0) ){
            countdownTimeout = setTimeout(()=>{
                setTime(time-1)
            }, 1000);
        } else if(isActive && time === 0){
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    },[isActive, time]);

    return(
        <CountDownContext.Provider
            value={{
                minutes,
                seconds,
                hasFinished,
                isActive,
                startCountdown,
                resetCountdown,
            }}
        >
            { children }
        </CountDownContext.Provider>
    );
}

export default CountDownProvider;