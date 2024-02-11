'use client'
export default function StartButton(props:any) {
    function startHandler() {
        props.switchStatus();
        // props.calculateTime();
        console.log('start');
    }

    return (
        <>
            <button className={'start watchBtn'} onClick={startHandler}>Start</button>
        </>
    )
}
