import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { UserState } from './types/user'

@Module({ namespaced: true, name: 'userModule' })
export default class UserModule extends VuexModule {
  selectedUser: UserState = {} as UserState
  user: UserState = {
    userName: 'Felipe Modena',
    isActive: true,
    messages: [],
    notifications: [],
    id: '0',
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
    roles: [],
    permissions: ['user', 'admin', 'company-owner'],
    created_at: '',
    updated_at: '',
    deleted_at: '',
    sessionTime: 0,
  }

  token: any =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZlbGlwZS5rcm9pdG9yQGdtYWlsLmNvbSIsInRva2VuIjoiMzEyM2QxMmUzMTIzIiwibmFtZSI6IkZlbGlwZSBLcm9pdG9yIENhcmEgTW9kZW5hIiwiaWQiOjF9.81LoYmtdH5wxYW1XRxmdy8IqGiSsgTfcY-EuRhzEacceyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZlbGlwZS5rcm9pdG9yQGdtYWlsLmNvbSIsInRva2VuIjoiMzEyM2QxMmUzMTIzIiwibmFtZSI6IkZlbGlwZSBLcm9pdG9yIENhcmEgTW9kZW5hIiwiaWQiOjF9.81LoYmtdH5wxYW1XRxmdy8IqGiSsgTfcY-EuRhzEacc'

  @Mutation
  updateUserName(newUserName: string) {
    this.user.userName = newUserName
  }

  @Mutation
  createNewUserMutation(user: UserState) {
    this.user = user
  }

  @Action
  createNewUserAction(user: UserState) {
    const newUser = { ...user }
    this.createNewUserMutation(newUser)
  }
}
