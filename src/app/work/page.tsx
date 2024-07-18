import ResumeHeader from './Header' 
import ResumeSection from './ResumeSection'
import { experiences, educations, skills } from './resumeInfo'

export default function Resume() {
  return (
    <div className="px-[200px] py-[100px]">
      <ResumeHeader />
      <div className="flex flex-col w-full divide-y-2 border-y-2">
          <ResumeSection title="Experience" resumeItems={experiences} />
          <ResumeSection title="Education" resumeItems={educations} />
          <ResumeSection title="Skill & Expertise" resumeItems={skills} />
      </div>
    </div>
  )
}