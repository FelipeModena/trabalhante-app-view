import { Base } from "./common/Base"

export interface UserState extends Base {
  userName?: string
  isActive?: boolean
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
