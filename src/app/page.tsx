import Image from "next/image";
import ProcessButton from "@/Component/ProcessButton";

export default function Home() {

  return (
    <div className={'container'}>
      {/*<div className={'sideMenu'}>side</div>*/}
      <div className={'timer'}>
          <div className={'clock'}>
              <span className={'remainTime'}>12:25</span>
          </div>
          <div className={'buttonContainer'}>
            <ProcessButton/>
          </div>
      </div>
      {/*<div className={'content'}>menu screen or todo</div>*/}
    </div>
  );
}
