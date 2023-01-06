import { Base } from './common/Base'

export interface PeriodCompanyEvaluationState {
  id?: string
  period?: number
  averageGrade: number
  publicEvaluationsTotal?: number
  publicEvaluationsReplyTotal?: number
}
export interface JobOpportunityState extends Base {
  companyId?: string
  title?: string
  description?: string
  salary?: number
  applications?: number
  link?: string
  status?: boolean
  clicks?: number
}
export interface CompanyStatusState {
  mensalSearches?: number
  newReviews?: number
  notifications?: string[]
  lastMonthGrade?: number
}
export interface CompanyBaseConfigState {
  email?: string
  avatar?: string
}

export interface CompanyInfoState {
  city?: string
  uf?: string
  lastMonthGrade?: number
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
  logo?: string
}
