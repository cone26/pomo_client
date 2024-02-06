'use client'
import FilterStatus from "@/Component/FilterStatus";
import { useEffect, useRef, useState} from "react";

export default function Home() {
    // states
    const DEFAULT_TIME = 1
    const [status, setStatus] = useState(true)
    const [time, setTime] = useState(DEFAULT_TIME* 60);
    const [breakTime, setBreakTime] = useState(3 * 60);
    // const [round, setRound] = useState(0);
    const [minute, setMinute] = useState("");
    const [second, setSecond] = useState("");
    const [isBreak, setIsBreak] = useState(false);

    // refs
    const timeCount = useRef(time);
    const breakCount = useRef(breakTime)
    const count = isBreak ? breakCount : timeCount;
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
        minuteCalculator();
        if(count.current <= 0) {
            setStatus(true)
            setIsBreak(true)
            // @ts-ignore
            clearInterval(interval.current);
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
        count.current = time;
        // setRound((round)=>round+1)
    }



    return (
        <div className={'container'}>
            {/*<div className={'sideMenu'}>side</div>*/}
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
        </div>
    );
}
