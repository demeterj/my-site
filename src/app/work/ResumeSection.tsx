import { ResumeItem } from "./types"
import ResumeCard from "./ResumeCard"

export default function ResumeSection({title, resumeItems}: {title: string, resumeItems: ResumeItem[]}) {
  return (
    <div className="grid grid-cols-2 py-4">
      <div className="font-bold text-[20px]">{title}</div>
      <div className="flex flex-col space-y-4">
        {resumeItems.map(resumeItem => (
          <ResumeCard resumeItem={resumeItem} key={resumeItem.id} />
        ))
      }
      </div>
    </div>
  )
}