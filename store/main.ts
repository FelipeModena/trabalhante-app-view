import Vuex from 'vuex'
import CompanyModule from './company'
import UserModule from './user'

// eslint-disable-next-line import/no-named-as-default-member
const store = new Vuex.Store({

  
  modules: {
    companyModule: CompanyModule,
    userModule: UserModule,
  },
})
export default store
