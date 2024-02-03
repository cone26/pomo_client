'use client'
import FilterStatus from "@/Component/FilterStatus";
import {useEffect, useState} from "react";
export default function Home() {
    const DEFAULT_TIME = 15
    const [status, setStatus] = useState(true)
    const switchStatus = () => {
        setStatus(!status)
    };
    const [time, setTime] = useState(DEFAULT_TIME*60);
    const [minute, setMinute] = useState(Math.floor(time / 60));
    const [second, setSecond] = useState(time % 60);
    const [reset, setReset] = useState(false)
    const resetTime = () => {
        setReset(true)
    }
    const [resetTimer, setResetTimer] = useState(0);

    const setClock = (time) => {
        setMinute(Math.floor(time / 60))
        setSecond(time % 60)
    }
    // 여기 수정
    if(reset) {
        setResetTimer(DEFAULT_TIME*60)
        setClock(resetTimer)
    }
    if(!status){
        setTimeout(()=>{
            setTime(time-1);
            setClock(time)
        },1000)
    }


    return (
        <div className={'container'}>
            {/*<div className={'sideMenu'}>side</div>*/}
            <div className={'timer'}>
                <div className={'clock'}>
                  <span className={'remainTime'}>
                      {`${minute}:${second}`}
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
