'use client'
import FilterStatus from "@/Component/FilterStatus";
import {useState} from "react";
export default function Home() {
    const TIME_SET = 15;
    const [status, setStatus] = useState(true)
    const switchStatus = () => {
        setStatus(!status)
    };

    const [time, setTime] = useState(TIME_SET*60);
    const [minute, setMinute] = useState(Math.floor(time / 60));
    const [second, setSecond] = useState(time % 60);
    const resetTimer = () => {
        setTime(TIME_SET*60)
        console.log(time)
        setMinute(Math.floor(time / 60))
        setSecond(time % 60)
    }
    const calculateTime = () => {
        setTime(time-1);
        setMinute(Math.floor(time / 60))
        setSecond(time % 60)
    }
    const [currentTime, setCurrentTime] = useState(0);
    const currentTimeIs = () => {
        setCurrentTime(new Date().getTime())
    }

    // 여기 수정
    if(!status){
        setInterval(()=> {
            calculateTime()
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
                  <FilterStatus status={status} switchStatus={switchStatus} resetTimer={resetTimer} calculateTime={calculateTime}/>
              </div>
            </div>
        {/*<div className={'content'}>menu screen or todo</div>*/}
        </div>
    );
}
