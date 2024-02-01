'use client'
export default function StartButton() {
    function startHandler() {
        console.log('start')
    }

    return (
        <>
            <button className={'start'} onClick={startHandler}>Start</button>
        </>
    )
}
