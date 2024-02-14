'use client'
export default function ProcessButton(props:any) {
    function pauseHandler() {
        props.switchStatus();
    }
    function giveUpHandler() {
        props.switchStatus();
        props.clearTime();
    }

    return (
        <>
            <button className={'giveUp watchBtn'} onClick={giveUpHandler}>Give Up</button>
            <button className={'pause watchBtn'} onClick={pauseHandler}>Pause</button>
        </>
    )
}
