const experiences = [
  {
    id: 0,
    title: 'Goldcast',
    subtitle: 'Software Engineer & Associate Product Manager',
    startDate: {
      year: "2021",
      month: "Aug"
    },
    endDate: {
      year: "2024",
      month: "Mar"
    },
    description: `Led Engineering and Product development of features in the pre-event space including:`,
    accomplishments: [
      'A self-service feature for customers to use Vanity URLs and scale them with their high-volume event strategy',
      'A solution for customers to add their preferred tracking pixels to their pages to analyze and optimize their registration campaigns',
      `System for registrant's to unsubscribe from event emails and for organizers to track unsubscription data`,
      `Dashboard for organizers to analyze the success of their email campaigns`
    ]
  },
  {
    id: 1,
    title: 'Goldcast',
    subtitle: 'Software Engineer & Product Manager Intern',
    startDate: {
      year: '2020',
      month: 'May'
    },
    endDate: {
      year: '2020',
      month: 'Aug'
    },
    description: `Led development of key features for Goldcasts V1 including:`,
    accomplishments: [
      `A calendar invite that automatically blocks off the event on registrants' calendars`,
      `Hubspot integration to sync registrant information into automated Hubspot workflows`,
      `Polling feature to engage live audiences`
    ]
  },
  {
    id: 2,
    title: 'FeelGood',
    subtitle: 'Co-President',
    startDate: {
      year: '2020',
      month: 'Sept'
    },
    endDate: {
      year: '2021',
      month: 'May'
    },
    description: `
    As Co-President of FeelGood during the Covid-19 pandemic, I restrategized our fundraising and recruitment campaigns to have success while meeting social isolation requirements.`,
    accomplishments: [
      `Exceeded our fundraising goal by 150% by creating and executing a fundraiser for students' parents to send their kid a care package of goods`,
      `Grew FeelGood's members by 125% by planning engaging virtual team meetings and by entrusting new teammates with key fundraiser responsibilities`
    ]
  }
]

const educations = [
  {
    id: 0,
    title: 'Univeristy of Michigan',
    subtitle: 'Bachelors of Science in Computer Science',
    subsubtitle: 'Minor in Business Administration',
    startDate: {
      year: '2017',
      month: 'Sept'
    },
    endDate: {
      year: '2021',
      month: 'May'
    },
    accomplishments: [
      'Honors: Summa Cum Laude, GPA: 3.88/4.0',
      'Relevant Coursework: Web Systems, Data Structures and Algorithms, Business Strategy'
    ]
  }
]

const skills = [
  {
    id: 0,
    accomplishments: [
      'Languages: JavaScript, Python, SQL',
      'Tools: React, VueJS, Flask',
      'Soft Skills: Written & verbal communication, product prioritization'
    ]
  }
]


export {experiences, educations, skills}