import Arrow from "@/assets/Arrow.svg"

export default function ResumeHeader() {
  return (
    <div className="flex justify-between items-center mb-[10px]">
      <div className="font-bold text-[30px]">Experience</div>
      <a
        href="https://drive.google.com/file/d/1e0bQpX5gyUvdkCuM-3dWFBGeN-gOwZAk/view?usp=sharing"
        target="_blank"
        className="p-2 group transition-all ease-in-out delay-150 duration-500 hover:text-slate-600"
        >
        View Full Resume
          <Arrow width={18} height={18} className="group-hover:text-slate-600 inline ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all ease-in-out delay-150 duration-200"/>
        </a>
    </div>
  )
}