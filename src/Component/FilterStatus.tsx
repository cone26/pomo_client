'use client'
import StartButton from "@/Component/StartButton";
import ProcessButton from "@/Component/ProcessButton";

export default function FilterStatus(props:any) {
    if(props.status) {
        return (
            <StartButton status={props.status} switchStatus={props.switchStatus} resetTimer={props.resetTimer}  calculateTime={props.calculateTime} initTimeIs={props.initTimeIs}/>
        )
    } else {
        return (
            <ProcessButton status={props.status} switchStatus={props.switchStatus} resetTimer={props.resetTimer} calculateTime={props.calculateTime} resetTime={props.resetTime} clearTime={props.clearTime}/>
        )
    }


}
