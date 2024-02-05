'use client'
import FilterStatus from "@/Component/FilterStatus";
import {useEffect, useRef, useState} from "react";
export default function Home() {
    // states
    const DEFAULT_TIME = 15
    const [status, setStatus] = useState(true)
    const [time, setTime] = useState(0);
    const [minute, setMinute] = useState("");
    const [second, setSecond] = useState("");
    const [initTime, setInitTime] = useState(DEFAULT_TIME * 60 * 1000);

    // refs
    const startTimeRef = useRef(0);
    const leftTimeRef = useRef(0);

    useEffect(()=> {

    })
    const switchStatus = () => {
        setStatus(!status)
    };

    const resetTime = () => {
        setReset(true)
    }

    if(!status){
        setTimeout(()=>{
            setInitTime(initTime-1000)
        },1000)
    }

    // 느려 !
    useEffect(()=>{
        const minutes = String(new Date(initTime).getMinutes()).padStart(2,'0');
        const seconds = String(new Date(initTime).getSeconds()).padStart(2,'0');
        setTime(`${minutes}:${seconds}`)
    },[initTime])
    // const timeSpan = () => {
    //
    // }
    return (
        <div className={'container'}>
            {/*<div className={'sideMenu'}>side</div>*/}
            <div className={'timer'}>
                <div className={'clock'}>
                    <span className={'remainTime'}>
                        {time}
                    </span>
                </div>
                <div className={'buttonContainer'}>
                    <FilterStatus status={status} switchStatus={switchStatus} resetTime={resetTime}/>
                </div>
            </div>
            {/*<div className={'content'}>menu screen or todo</div>*/}
        </div>
    );
}
