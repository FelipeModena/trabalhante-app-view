export interface CategoryComplainState {
  id: string
  name: string
  relevance: number
  tags: string
}
export interface ComplainState {
  id?: string
  userId?: string
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
