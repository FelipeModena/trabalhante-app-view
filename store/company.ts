import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { CompanyState } from './types/company'
import { ComplainState } from './types/complain'
import CompanyMock from './mocks/company/company.mock.json'
import ComplainMock from './mocks/company/complain.mock.json'
@Module({ namespaced: true, name: 'companyModule' })
export default class CompanyModule extends VuexModule {
  selectedCompany: CompanyState = {} as CompanyState
  companiesMock: CompanyState[] = CompanyMock

  companies: CompanyState[] = this.getBaseCompany()

  complains: ComplainState[] = ComplainMock as ComplainState[]

  @Mutation
  getBaseCompany() {
    let companyLocal: any
    if (process.browser) {
      companyLocal = JSON.parse(localStorage.getItem('companyLocal') || '{}')
      if (JSON.stringify(companyLocal) !== '{}') {
        CompanyMock.push(companyLocal)
        const companiesByID = CompanyMock.filter(
          (company) => company.id === companyLocal.id
        )[0]

        return companiesByID
      }
    }
  }

  @Mutation
  private updateCompanyMutation(id: string) {
    this.companies.find((company) => {
      if (company.id === id) {
        company.companyName = 'Company 1 updated'
      }
      return company
    })
  }

  @Action
  updateCompanyAction(id: string) {
    this.updateCompanyMutation(id)
  }

  @Mutation
  addNewCompanyMutation(company: CompanyState) {
    if (process.client) {
      const localMock = localStorage.getItem('companyLocal' || '{}')
      const localMockParse = JSON.parse(localMock || '[]')
      localMockParse.push(company)
      localStorage.setItem('companySelected', company.id || '')
      localStorage.setItem('companyLocal', JSON.stringify(localMockParse))
    }
  }

  @Action
  addNewCompanyAction(company: CompanyState): number {
    const id = Math.random().toString(36).substr(2, 9)
    const objectToSave = { ...company, id }

    if (company.id?.length === 0) {
      objectToSave.id = id
    }

    this.addNewCompanyMutation(objectToSave)
    return 1
  }

  @Action
  changeCompany(id: string) {
    this.changeActualCompanyMutation(id)
    if (process.client) {
      localStorage.setItem('companySelected', id)
    }
  }

  @Mutation
  changeActualCompanyMutation(userId: string) {
    console.log('id', userId)
    const companySelected = this.companiesMock.filter(
      (company) => company.id === userId
    )
    console.log('companySelected', companySelected)
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
