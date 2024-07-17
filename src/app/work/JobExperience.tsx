export default function JobExperience({job}: {job: any}) {
  return (
    <>
    <h1>{job.company}</h1>
    <h2>{job.title}</h2>
    <h3>{job.startDate} - {job.endDate}</h3>
    <ul>
      {job.accomplishments.map((accomplishment, index) => (
        <li className="list-disc pl-2" key={index}>{accomplishment}</li>
      ))}
    </ul>
    </>
  )
}