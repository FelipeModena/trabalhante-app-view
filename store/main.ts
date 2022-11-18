import Vuex from 'vuex'
import CompanyModule from './company'
import ComplainModule from './complain'
import UserModule from './user'

// eslint-disable-next-line import/no-named-as-default-member
export const store =  new Vuex.Store({
  state: () => ({}),
  mutations: {},
  actions: {},
  modules: {
    companyModule: CompanyModule,
    userModule: UserModule,
    complainModule: ComplainModule,
  },
})
//  default store
