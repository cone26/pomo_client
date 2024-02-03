'use client'
import FilterStatus from "@/Component/FilterStatus";
import {useState} from "react";
export default function Home() {
    const [status, setStatus] = useState(true)
    const switchStatus = () => {
        setStatus(!status)
    };
    const [time, setTime] = useState(15*60);
    const [minute, setMinute] = useState(Math.floor(time / 60));
    const [second, setSecond] = useState(time % 60);
    // 여기 수정
    if(!status){
        setTimeout(()=>{
            setTime(time-1);
            setMinute(Math.floor(time / 60))
            setSecond(time % 60)
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
                    <FilterStatus status={status} switchStatus={switchStatus}/>
                </div>
            </div>
            {/*<div className={'content'}>menu screen or todo</div>*/}
        </div>
    );
}
