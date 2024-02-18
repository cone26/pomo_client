'use client'
export default function StartButton(props:any) {
    function startHandler() {
        props.switchStatus();
    }

    return (
        <>
            <button className={'start watchBtn'} onClick={startHandler}>Start</button>
        </>
    )
}
