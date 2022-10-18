// import {
//   VuexModule,
//   Module,
//   Mutation,
//   Action,
//   getModule,
// } from 'vuex-module-decorators'
// import store from '~/store/main'

// @Module({
//   dynamic: true,
//   namespaced: true,
//   name: 'LoginModule',
//   store,
// })
// class LoginModule extends VuexModule {
//   private loggedIn: boolean = false
//   private token: string | null = null
//   private user: [] | null = null
//   private userType: string | null = null

//   @Mutation public setLoggedIn(loggedIn: boolean) {
//     this.loggedIn = loggedIn
//   }

//   @Mutation public setToken(token: string) {
//     this.token = token
//   }

//   @Mutation public setUser(user: []) {
//     this.user = user
//   }

//   @Mutation public setUserType(userType: string) {
//     this.userType = userType
//   }

//   @Action({ commit: 'setLoggedIn' }) public login() {
//     return true
//   }

//   @Action({ commit: 'setLoggedIn' }) public logout() {
//     return false
//   }

//   public get isLoggedIn(): boolean | null {
//     return this.loggedIn
//   }

//   public get Token(): string | null {
//     return this.token
//   }

//   public get User(): [] | null {
//     return this.user
//   }

//   public get UserType(): string | null {
//     return this.userType
//   }
// }

// // export default LoginModule;
// export default getModule(LoginModule)
