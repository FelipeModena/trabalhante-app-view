export interface PeriodCompanyEvaluationState {
  id?: string
  period?: number
  averageGrade?: number
  publicEvaluationsTotal?: number
  publicEvaluationsReplyTotal?: number
}
export interface JobOpportunityState {
  id?: string
  name?: string
  description?: string
  link?: string
  date?: string
  status?: boolean
}

export interface CompanyState {
  companyName?: string
  isActive?: boolean
  mensalSearches?: number
  messages?: string[]
  periods?: PeriodCompanyEvaluationState[]
  jobOpportunities?: JobOpportunityState[]
  notifications?: string[]
  id?: string
  newReviews?: number
  email?: string
  socialName?: string
  avatar?: string
  roles?: string[]
  created_at?: string
}
