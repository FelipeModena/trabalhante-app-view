import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { CompanyState } from './types/company'
import { ComplainState } from './types/complain'
import CompanyMock from './mocks/company/company.mock.json'
import ComplainMock from './mocks/company/complain.mock.json'
@Module({ namespaced: true, name: 'companyModule' })
export default class CompanyModule extends VuexModule {
  selectedCompany: CompanyState = {} as CompanyState
  companiesMock: CompanyState[] = CompanyMock

  companies: CompanyState[] = []

  complains: ComplainState[] = ComplainMock as ComplainState[]

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

  @Mutation
  addNewCompanyMutation(company: CompanyState) {
    this.companiesMock.push(company)
    localStorage.setItem('companyLocal', JSON.stringify(this.companiesMock))
  }

  @Action
  addNewCompanyAction(company: CompanyState): number {
    const id = Math.random().toString(36).substr(2, 9)
    const objectToSave = { ...company, id }

    if (company.id?.length === 0) {
      objectToSave.id = id
    }
    if (process.client) localStorage.setItem('companySelected', objectToSave.id)

    this.addNewCompanyMutation(objectToSave)
    return 1
  }

  @Action
  changeCompany(id: string) {
    this.changeCompanyMutation(id)
    if (process.client) {
      localStorage.setItem('companySelected', id)
    }
  }

  @Action
  getBaseCompany(userId: string) {
    if (process.client) {
      const companySelected = userId

      this.changeCompanyMutation(companySelected)
    }
  }

  @Mutation
  changeCompanyMutation(userId: string) {
    const localStorageCompany = localStorage.getItem('companySelected')

    let companySelected: CompanyState = this.companiesMock.find(
      (company) => company.id === localStorageCompany
    )!
    let companiesByUserId: CompanyState[] = this.companiesMock.filter(
      (company) => company.userId === userId
    )!

    if (!companySelected) {
      companySelected = this.companiesMock.find(
        (company) => company.userId === '1'
      )!
    }

    if (companiesByUserId.length <= 0) {
      companiesByUserId = this.companiesMock.filter(
        (company) => company.userId === '1'
      )!
    }
    this.companies = companiesByUserId
    this.selectedCompany = companySelected
  }

  @Mutation
  selectCompanyMutation(userId: string) {
    const companySelectedId = localStorage.getItem('companySelected')
    if (companySelectedId) {
      const companyByUserId = this.companies.find(
        (company) => company.userId === userId
      )
      this.selectedCompany = companyByUserId!
    }
  }

  @Action
  selectedCompanyAction(userId: string) {
    localStorage.getItem('companySelected')
    return this.selectCompanyMutation(userId)
  }
}
