import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { UserState } from './types/user'

@Module({ namespaced: true, name: 'userModule' })
export default class UserModule extends VuexModule {
  user: UserState = {
    userName: 'Felipe Modena',
    isActive: true,
    messages: [],
    notifications: [],
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
    roles: [],
    permissions: [],
    created_at: '',
    updated_at: '',
    deleted_at: '',
    sessionTime: 0,
  }

  @Mutation
  updateUserName(newUserName: string) {
    this.user.userName = newUserName
  }

  @Mutation
  deleteUserName(newUserName: string) {
    this.user.userName = newUserName + 'null'
  }

  @Action
  clearUser() {
    this.context.commit('deleteUserName', 'User removed')
  }
}
