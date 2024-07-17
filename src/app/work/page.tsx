import JobExperience from "./JobExperience"

export default function Resume() {
  const experiences = [
    {
      id: 0,
      company: 'Goldcast',
      title: 'Associate Product Manager & Software Engineer',
      startDate: 'Aug 2021',
      endDate: 'March 2024',
      accomplishments: [
        'won the rand prize',
        'developed wesome features'
      ]
    }
  ]
  return (
    <div className="p-4">
      Here's a list of Jon's accomplishments
      {experiences.map(experience => (
        <JobExperience job={experience} key={experience.id} />
      ))
    }
    </div>
  )
}