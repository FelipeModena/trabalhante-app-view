export interface CategoryComplainState {
  id: string
  name: string
}
export interface ComplainState {
  id?: string
  companyId?: string
  title?: string
  userStatus?: number
  hashtags?: string[]
  description?: string
  status?: string
  createdAt?: string
  updatedAt?: string
  categories?: [CategoryComplainState]
  relevance?: number
  creatorReference?: number
  creatorId?: string
  receiverId?: string
}
