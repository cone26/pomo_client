'use client'
import FilterStatus from "@/Component/FilterStatus";
import {MutableRefObject, useEffect, useRef, useState} from "react";
import {clearInterval} from "timers";
import {loadGetInitialProps} from "next/dist/shared/lib/utils";
export default function Home() {
    // states
    const DEFAULT_TIME = 15
    const [status, setStatus] = useState(true)
    const [time, setTime] = useState(DEFAULT_TIME* 60);
    const [minute, setMinute] = useState("");
    const [second, setSecond] = useState("");

    // refs
    const count = useRef(time);
    const interval = useRef<ReturnType<typeof setInterval> | null>(null)



    useEffect(()=>{
        if(!status) {
            interval.current = setInterval(()=>{
                count.current -= 1;
                minuteCalculator()
            },1000)
            // @ts-ignore
            return () => clearInterval(interval.current);
        }
    },[status])


    useEffect(()=> {
        // console.log('cal')
        minuteCalculator();
        if(count.current <= 0) {
            setStatus(true)
            // @ts-ignore
            clearInterval(interval.current);
        }
    },[count.current])

    const switchStatus = () => {
        setStatus(!status)
    };

    // function
    const minuteCalculator = () => {

        // convert time
        // const toSecond = Math.floor(count.current / 1000)
        setMinute((Math.floor(count.current / 60)).toString())
        setSecond((Math.floor(count.current % 60)).toString())
    }

    const clearTime = () => {
        setTime(0)
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
            {/*<div className={'content'}>menu screen or todo</div>*/}
        </div>
    );
}
