'use client'
export default function ProcessButton(props) {
    function pauseHandler() {
        props.calculateTime()
        props.switchStatus();
    }
    function giveUpHandler() {
        // props.currentTimeIs()
        props.switchStatus();
        props.resetTimer();
    }

    return (
        <>
            <button className={'giveUp'} onClick={giveUpHandler}>Give Up</button>
            <button className={'pause'} onClick={pauseHandler}>Pause</button>
        </>
    )
}
