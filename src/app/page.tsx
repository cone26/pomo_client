import Image from "next/image";
'use client'
export default function Home() {
    function pauseHandler() {
        console.log('pause')
    }
    function giveUpHandler() {
        console.log('give up')
    }
  return (
    <div className={'container'}>
      {/*<div className={'sideMenu'}>side</div>*/}
      <div className={'timer'}>
          <div className={'clock'}>
              <span className={'remainTime'}>12:25</span>
          </div>
          <div className={'buttonContainer'}>
              <button className={'giveUp'} onClick={giveUpHandler}>Give Up</button>
              <button className={'pause'} onClick={pauseHandler}>Pause</button>
          </div>
      </div>
      {/*<div className={'content'}>menu screen or todo</div>*/}
    </div>
  );
}
