import { Base } from './common/Base'

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
export interface CompanyStatusState {
  mensalSearches?: number
  newReviews?: number
  notifications?: string[]
}
export interface CompanyBaseConfigState {
  email?: string
  created_at?: string
  avatar?: string
}

export interface CompanyInfoState {
  city?: string
  uf?: string
}

export interface CompanyState extends Base {
  userId?: string
  companyName?: string
  socialName?: string
  description?: string
  companyInfo?: CompanyInfoState
  companyStatus: CompanyStatusState
  roles?: string[]
  messages?: string[]
  configurations?: CompanyBaseConfigState
  periods?: PeriodCompanyEvaluationState[]
  jobOpportunities?: JobOpportunityState[]
}
