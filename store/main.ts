import Vuex from 'vuex'
import CompanyModule from './company'
import ComplainModule from './complain'
import JobModule from './jobs'
import UserModule from './user'

export const store =  new Vuex.Store({
  state: () => ({}),
  modules: {
    companyModule: CompanyModule,
    userModule: UserModule,
    complainModule: ComplainModule,
    jobModule: JobModule,
     
  },
})
//  default store
