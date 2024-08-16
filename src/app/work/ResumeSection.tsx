import { ResumeItem } from "./types"
import ResumeCard from "./ResumeCard"

export default function ResumeSection({id, resumeItems}: {id: string, resumeItems: ResumeItem[]}) {
  return (
      <div className="flex flex-col space-y-4" id={id}>
        {resumeItems.map(resumeItem => (
          <ResumeCard resumeItem={resumeItem} key={resumeItem.id} />
        ))
      }
    </div>
  )
}