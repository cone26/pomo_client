'use client'
import FilterStatus from "@/Component/FilterStatus";
import { useEffect, useRef, useState} from "react";
import SignInButton from "@/Component/SignInButton";

export default function Home() {
    // states
    const DEFAULT_TIME = 15
    const DEFAULT_BREAK = 5
    const M_FOCUS_TIME = "It's time to focus !";
    const M_BREAK_TIME = "Let's have a break.";

    const [status, setStatus] = useState(true)
    const [time, setTime] = useState(DEFAULT_TIME* 60);
    const [breakTime, setBreakTime] = useState(DEFAULT_BREAK * 60);
    // const [round, setRound] = useState(0);
    const [minute, setMinute] = useState("");
    const [second, setSecond] = useState("");
    const [isBreak, setIsBreak] = useState(false);
    const [message, setMessage] = useState("");

    // refs
    const timeCount = useRef(time);
    const breakCount = useRef(breakTime)
    let count = isBreak ? breakCount : timeCount;
    const interval = useRef<ReturnType<typeof setInterval> | null>(null)

    useEffect(()=>{
        if(!status) {
            interval.current = setInterval(()=>{
                count.current -= 1;
                minuteCalculator();
            },1000);
            // @ts-ignore
            return () => clearInterval(interval.current);
        }
    },[status])


    useEffect(()=> {
        setMessage(isBreak ? M_BREAK_TIME : M_FOCUS_TIME)
        minuteCalculator();
        if(count.current <= 0) {
            setStatus(!status)
            setIsBreak(!isBreak)
            // @ts-ignore
            clearInterval(interval.current);
            count.current = isBreak ? breakTime : time;

        }
    },[count.current])

    const switchStatus = () => {
        setStatus(!status)
    };

    // function
    const minuteCalculator = () => {
        setMinute((Math.floor(count.current / 60)).toString())
        setSecond((Math.floor(count.current % 60)).toString())
    }

    const clearTime = () => {
        count.current = isBreak ? breakTime : time;
        setIsBreak(false)
        // setRound((round)=>round+1)
    }



    return (
        <div className={'container'}>
            {/*<div className={'sideMenu'}>side</div>*/}
            <h1 className={'message'}>{message}</h1>
            <div className={'timer'}>
                <div className={'clock'}>
                    <span className={'remainTime'}>
                        {`${minute.padStart(2,'0')}:${second.padStart(2,'0')}`}
                    </span>
                </div>
                <div className={'buttonContainer'}>
                    <FilterStatus status={status} switchStatus={switchStatus} clearTime={clearTime} />
                </div>
            </div>
            {/*<div className={'round'}>*/}
            {/*    <span className={'successDot'}></span>*/}
            {/*</div>*/}
            {/*<div className={'content'}>menu screen or todo</div>*/}
            <SignInButton/>
        </div>
    );
}
