import Image from "next/image"

export default function ResumeHeader() {
  return (
    <div className="flex justify-between items-center mb-[10px]">
      <div className="font-bold text-[40px]">Resume</div>
      <a href="https://drive.google.com/file/d/1e0bQpX5gyUvdkCuM-3dWFBGeN-gOwZAk/view?usp=sharing" target="_blank">
        View Full Resume
        <Image src="./arrow.svg" alt="arrow" width={20} height={20} className="inline ml-1" />
        </a>
    </div>
  )
}