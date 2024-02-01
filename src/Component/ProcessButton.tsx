'use client'
export default function ProcessButton(props) {
    function pauseHandler() {
        console.log('pause')
    }
    function giveUpHandler() {
        props.switchStatus();
    }

    return (
        <>
            <button className={'giveUp'} onClick={giveUpHandler}>Give Up</button>
            <button className={'pause'} onClick={pauseHandler}>Pause</button>
        </>
    )
}
