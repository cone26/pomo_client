'use client'
import StartButton from "@/Component/StartButton";
import ProcessButton from "@/Component/ProcessButton";

export default function FilterStatus(props) {
    if(props.status) {
        return (
            <StartButton status={props.status} switchStatus={props.switchStatus}/>
        )
    } else {
        return (
            <ProcessButton status={props.status} switchStatus={props.switchStatus}/>
        )
    }


}
