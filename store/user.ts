import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { UserState } from './types/user'
import UserMock from './mocks/user/user.mock.json'

@Module({ namespaced: true, name: 'userModule' })
export default class UserModule extends VuexModule {
  user: UserState = this.getBaseUser() || {}

  usersMock: UserState[] = UserMock as UserState[]

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

  // section for mocks

  // Action to set mock user by option. if option 1, get user with id ac3f648d-0800-4d03-9c9a-15feb6e29601, and if option 2, get user with id 7d662b38-0253-4125-a338-2c2605a177b9, and set this user in localStorage
  @Action
  setMockUserAction(option: number) {
    this.setMockUserMutation(option)
  }

  @Mutation
  setMockUserMutation(option: number) {
    if (option === 1) {
      const user = UserMock.find(
        (user) => user.id === 'ac3f648d-0800-4d03-9c9a-15feb6e29601'
      )
      localStorage.setItem('userLocal', JSON.stringify(user))
    } else if (option === 2) {
      const user = UserMock.find(
        (user) => user.id === '7d662b38-0253-4125-a338-2c2605a177b9'
      )
      localStorage.setItem('userLocal', JSON.stringify(user))
    }
  }
}
