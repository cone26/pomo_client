import Image from "next/image";

export default function Home() {
  return (
    <div className={'container'}>
      <div className={'sideMenu'}>side</div>
      <div className={'timer'}>
          <div className={'clock'}></div>
      </div>
      <div className={'content'}>menu screen or todo</div>
    </div>
  );
}
