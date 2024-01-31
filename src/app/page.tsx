import Image from "next/image";

export default function Home() {
  return (
    <div className={'container'}>
      {/*<div className={'sideMenu'}>side</div>*/}
      <div className={'timer'}>
          <div className={'clock'}>
              <span className={'remainTime'}>12:25</span>
          </div>
          <div className={'buttonContainer'}>
              <button className={'giveUp'}>Give Up</button>
              <button className={'pause'}>Pause</button>
          </div>
      </div>
      {/*<div className={'content'}>menu screen or todo</div>*/}
    </div>
  );
}
