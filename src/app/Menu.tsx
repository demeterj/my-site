import Navigator from "@/components/Navigator"
import SocialThumbnails from "./SocialThumbnails";

export default function Menu({closeMenu} : {closeMenu: Function}) {
  return (
    <div className="fixed h-full w-full">
      <div className="animate-dropIn absolute h-full w-full bg-blue-100"></div>
      <div className="flex flex-col w-full h-full justify-evenly pt-[100px] pb-[100px] pl-[40px] ">
        <Navigator closeMenu={closeMenu} />
        <div className="flex animate-fadeIn opacity-0 space-x-8" style={{'--slidein-delay': `900ms`} as React.CSSProperties}>
          <SocialThumbnails />
        </div>
      </div>
    </div>
  )
}