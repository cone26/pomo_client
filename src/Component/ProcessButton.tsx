'use client'
export default function ProcessButton() {
    function pauseHandler() {
        console.log('pause')
    }
    function giveUpHandler() {
        console.log('give up')
    }

    return (
        <>
            <button className={'giveUp'} onClick={giveUpHandler}>Give Up</button>
            <button className={'pause'} onClick={pauseHandler}>Pause</button>
        </>
    )
}
