'use client'
export default function StartButton(props) {
    function startHandler() {
        // props.initTimeIs()
        props.switchStatus();
        // props.calculateTime();
        console.log('start');
    }

    return (
        <>
            <button className={'start'} onClick={startHandler}>Start</button>
        </>
    )
}
