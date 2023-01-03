import { Base } from "./common/Base"

export interface UserState extends Base {
  password?: string // remove this when implementing the login in a real API
  userName?: string
  isActive?: boolean
  jobModel?: number
  messages?: string[]
  notifications?: string[]
  email?: string
  first_name?: string
  last_name?: string
  avatar?: string
  roles?: string[]
  permissions?: string[]
  created_at?: string
  updated_at?: string
  deleted_at?: string
  sessionTime?: number
}
