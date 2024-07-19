import { ResumeItem, Date } from './types'

export default function ResumeCard({resumeItem}: {resumeItem: ResumeItem}) {
  function formatDate(startDate: Date, endDate: Date) {
    if (startDate.year === endDate.year) {
      return `${startDate.month} - ${endDate.month} ${endDate.year}`
    }
    return `${startDate.year} - ${endDate.year}`
  }

  return (
    <div className="grid grid-cols-4 space-x-2">
      <div className="col-span-1 font-light text-sm pt-[4px]">
        {resumeItem.startDate && resumeItem.endDate && formatDate(resumeItem.startDate, resumeItem.endDate)}
      </div>
      <div className="col-span-3">
      <p className="font-semibold text-[18px]">{resumeItem.title}</p>
        <p className="text-[16px]">{resumeItem.subtitle}</p>
        <p className="text-[16px]">{resumeItem.subsubtitle}</p>
        <p className="text-[14px]">{resumeItem.description}</p>
        <ul className="pl-4 text-[14px]">
          {resumeItem.accomplishments.map((accomplishment, index) => (
            <li className="list-disc pl-2" key={index}>{accomplishment}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}