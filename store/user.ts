import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { UserState } from './types/user'
import UserMock from './mocks/user/user.mock.json'

@Module({ namespaced: true, name: 'userModule' })
export default class UserModule extends VuexModule {
  user: UserState = this.getBaseUser() || {}

  usersMock: UserState[] = UserMock

  token: any =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZlbGlwZS5rcm9pdG9yQGdtYWlsLmNvbSIsInRva2VuIjoiMzEyM2QxMmUzMTIzIiwibmFtZSI6IkZlbGlwZSBLcm9pdG9yIENhcmEgTW9kZW5hIiwiaWQiOjF9.81LoYmtdH5wxYW1XRxmdy8IqGiSsgTfcY-EuRhzEacceyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZlbGlwZS5rcm9pdG9yQGdtYWlsLmNvbSIsInRva2VuIjoiMzEyM2QxMmUzMTIzIiwibmFtZSI6IkZlbGlwZSBLcm9pdG9yIENhcmEgTW9kZW5hIiwiaWQiOjF9.81LoYmtdH5wxYW1XRxmdy8IqGiSsgTfcY-EuRhzEacc'

  getBaseUser() {
    let userLocal: any

    if (process.browser) {
      userLocal = JSON.parse(localStorage.getItem('userLocal') || '{}')

      if (userLocal) {
        JSON.stringify(userLocal)
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
    let selectedUSer: UserState =
      this.usersMock.find((user) => user.id === id) || {}
    if (selectedUSer.id === undefined) {
      selectedUSer = this.usersMock.find((user) => user.id === '1') || {}
    }

    this.user = selectedUSer
  }

  @Mutation
  createNewUserMutation(user: UserState) {
    this.user = { ...this.user, ...user }
    this.usersMock.push(this.user)
    localStorage.setItem('userLocal', JSON.stringify(this.user))
  }

  // // make an action to get the older user based by deleted_at
  // @Action
  // getOlderUserAction() {
  //   this.getOlderUserMutation()
  // }

  // @Mutation
  // getOlderUserMutation() {
  //   const olderUser = this.usersMock.reduce((older, current) =>
  //     older.deleted_at > current.deleted_at ? older : current
  //   )
  //   this.user = olderUser
  // }
}
