import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { UserState } from './types/user'
import UserMock from './mocks/user/user.mock.json'

@Module({ namespaced: true, name: 'userModule' })
export default class UserModule extends VuexModule {
  user: UserState = this.getBaseUser() || {}

  usersMock: UserState[] = UserMock 

  @Mutation
  getBaseUser() {
    let userLocal: any

    if (process.browser) {
      userLocal = JSON.parse(localStorage.getItem('userLocal') || '{}')

      if (userLocal) {
        this.user = userLocal
        return userLocal
      }
      if (userLocal === undefined) {
        const user = UserMock.find((user) => user.id === '1')
        return user
      }
    }
  }

  @Action
  getUSerById(id: string) {
    this.getUserByIdMutation(id)
  }

  @Action
  createNewUserAction(user: UserState) {
    this.createNewUserMutation(user)
  }

  @Action
  changeUserByIdAction(id: string) {
    this.changeUserByIdMutation(id)
  }

  @Mutation
  changeUserByIdMutation(id: string) {
    const userInList = this.usersMock.find((user) => user.id === id)!
    this.user = userInList
  }

  @Mutation
  getUserByIdMutation(id: string) {
    const userLocal: UserState = JSON.parse(
      localStorage.getItem('userLocal') || '{}'
    )
    this.usersMock.push(userLocal)

    if (JSON.stringify(userLocal) !== '{}') {
      const selectedUSer: UserState =
        this.usersMock.find((user) => user.id === userLocal.id) || {}

      this.user = selectedUSer
    } else {
      const selectedUSer: UserState =
        this.usersMock.find((user) => user.id === id) || {}
      this.user = selectedUSer
    }
  }

  @Mutation
  createNewUserMutation(user: UserState) {
    this.user = { ...this.user, ...user }
    this.usersMock.push(this.user)
    localStorage.setItem('userLocal', JSON.stringify(this.user))
  }
}
