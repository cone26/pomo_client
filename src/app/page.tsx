'use client'
import FilterStatus from "@/Component/FilterStatus";
import { useEffect, useRef, useState} from "react";
import SignInButton from "@/Component/SignInButton";
import {useSession} from "next-auth/react";
import {getToken} from "@/utils/localStorage/token";
import {CONFIG} from "../../config";

export default function Home() {
    const { data: session } = useSession();
    // states
    const DEFAULT_TIME = 0.5
    const DEFAULT_BREAK = 0.5
    const M_FOCUS_TIME = "It's time to focus !";
    const M_BREAK_TIME = "Let's have a break.";

    const [status, setStatus] = useState(true)
    const [time, setTime] = useState(DEFAULT_TIME* 60);
    const [breakTime, setBreakTime] = useState(DEFAULT_BREAK * 60);
    const [round, setRound] = useState(0);
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
        if(session && session.user) void getRound(session)
    })
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
            if(isBreak) {
                setRound(round + 1)
                if(session && session.user) void updateRound(session)

            }
            count.current = isBreak ? breakTime : time;

        }
    },[count.current])


    const switchStatus = () => {
        setStatus(!status)
    };

    const getRound = async (session:any) => {
        const accessToken = session.user.data.accessToken
        const res = await fetch(`${CONFIG.SERVER}/round/day`, {
            method: "GET",
            headers: {
                // "Content-Type": "application/json",
                // TODO: localstorage 사용 수정
                // Authorization: `Bearer ${getToken().accessToken}`,
                Authorization: `Bearer ${accessToken}`,
            },
        });
        const data = await res.json()
        if(!data.data) setRound(0)
        else setRound(data.data.round)
    }

    const updateRound = async (session:any) => {
        const accessToken = session.user.data.accessToken;
        const res = await fetch(`${CONFIG.SERVER}/round/set`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({
                round: Number(round)
            })
        });
    }

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
                <span className={'round'}>{`Succeeded ${round} round`}</span>
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
