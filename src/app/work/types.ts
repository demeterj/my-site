export type Date = {
  year: string,
  month: string
}

export type ResumeItem = {
  id: number,
  title?: string,
  subtitle?: string,
  startDate?: Date,
  endDate?: Date,
  accomplishments: string[]
}