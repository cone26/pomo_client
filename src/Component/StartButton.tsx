'use client'
export default function StartButton(props) {
    function startHandler() {
        props.calculateTime();
        props.switchStatus();
        console.log('start');
    }

    return (
        <>
            <button className={'start'} onClick={startHandler}>Start</button>
        </>
    )
}
