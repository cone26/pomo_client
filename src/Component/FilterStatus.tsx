'use client'
import StartButton from "@/Component/StartButton";
import ProcessButton from "@/Component/ProcessButton";

export default function FilterStatus(props) {
    if(props.status == 0) {
        return (
            <StartButton/>
        )
    } else {
        return (
            <ProcessButton/>
        )
    }


}
