import { Base } from './common/Base'
import { CompanyState } from './company'

export interface UserState extends Base {
  password?: string // remove this when implementing the login in a real API
  userName?: string
  jobModel?: number
  messages?: string[]
  notifications?: string[]
  email?: string
  first_name?: string
  last_name?: string
  avatar?: string
  roles?: string[]
  permissions?: string[]
  sessionTime?: number
  companies: CompanyState[]
}
