import Image from "next/image";
import ProcessButton from "@/Component/ProcessButton";
import StartButton from "@/Component/StartButton";
import FilterStatus from "@/Component/FilterStatus";

export default function Home() {
    let status = 0;
    return (
        <div className={'container'}>
        {/*<div className={'sideMenu'}>side</div>*/}
            <div className={'timer'}>
              <div className={'clock'}>
                  <span className={'remainTime'}>12:25</span>
              </div>
              <div className={'buttonContainer'}>
                  <FilterStatus status={status}/>
              </div>
            </div>
        {/*<div className={'content'}>menu screen or todo</div>*/}
        </div>
    );
}
