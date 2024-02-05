'use client'
import FilterStatus from "@/Component/FilterStatus";
import {useEffect, useRef, useState} from "react";
import {clearInterval} from "timers";
export default function Home() {
    // states
    const DEFAULT_TIME = 15
    const [status, setStatus] = useState(true)
    const [time, setTime] = useState(DEFAULT_TIME* 60 * 1000);
    const [minute, setMinute] = useState("");
    const [second, setSecond] = useState("");
    const [count, setCound] = useState(0);

    // refs
    const intervalRef = useRef(null);
    const leftTimeRef = useRef(0);

    useEffect(()=> {
        minuteCalculator();
        if(time <= 0) {
            setStatus(true)
            setTime(0)
        }
    },[time])

    useEffect(()=>{
        let interval: NodeJS.Timer;
        if(!status) {
            interval =
                setInterval(() => {
                    setTime(time=>time+1)
                }, 1000)
        }
        else if (status && time === 0) {
            clearInterval(interval!)
        }
        return () => clearInterval(interval);
    },[status])

    const switchStatus = () => {
        setStatus(!status)
    };

    // function
    const minuteCalculator = () => {
        // convert time
        const toSecond = Math.floor(time / 1000)
        setMinute((Math.floor(toSecond / 60)).toString())
        setSecond((Math.floor(toSecond % 60)).toString())
    }

    const clearTime = () => {
        setTime(0)
    }
    const countDown = () => {
        setCound((count) => count -1)
    }

    const start = () => {
        if(!status) {

        }
    }
    // if(!status){
    //     setTimeout(()=>{
    //         setTime(time - 1)
    //     },1000)
    // }

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
            {/*<div className={'content'}>menu screen or todo</div>*/}
        </div>
    );
}
