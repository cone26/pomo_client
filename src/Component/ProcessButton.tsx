'use client'
export default function ProcessButton(props) {
    function pauseHandler() {
        props.switchStatus();
    }
    function giveUpHandler() {
        props.switchStatus();
        props.clearTime();
    }

    return (
        <>
            <button className={'giveUp'} onClick={giveUpHandler}>Give Up</button>
            <button className={'pause'} onClick={pauseHandler}>Pause</button>
        </>
    )
}
