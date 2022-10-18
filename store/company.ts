import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { CompanyState } from './types/company'
@Module({ namespaced: true, name: 'companyModule' })
export default class CompanyModule extends VuexModule {
  readonly companies: [CompanyState] = [
    {
      id: '1',
      companyName: 'Company 1',
    },
  ]

  @Mutation
  private updateCompanyMutation(id: string) {
    this.companies.find((company) => {
      if (company.id === id) {
        company.companyName = 'Company 1 updated'
      }
      return company
    })
  }

  @Mutation
  private deleteCompany(id: string) {
    this.companies.filter((company) => company.id !== id)
  }

  @Action
  updateCompanyAction(id: string) {
    this.updateCompanyMutation(id)
  }
}
