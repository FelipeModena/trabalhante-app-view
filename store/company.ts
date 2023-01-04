import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { CompanyState } from './types/company'
import { ComplainState } from './types/complain'
import CompanyMock from './mocks/company/company.mock.json'
import ComplainMock from './mocks/company/complain.mock.json'
@Module({ namespaced: true, name: 'companyModule' })
export default class CompanyModule extends VuexModule {
  companiesMock: CompanyState[] = CompanyMock

  companies: CompanyState[] = this.getBaseCompanies()

  selectedCompany: CompanyState = this.getBaseSelectedCompany()

  complains: ComplainState[] = ComplainMock as ComplainState[]

  getBaseCompanies() {
    if (!process.browser) {
      return [] as CompanyState[]
    }

    const companyLocal: CompanyState[] = JSON.parse(
      localStorage.getItem('companyLocal') || '{}'
    )

    const userLocalID = JSON.parse(localStorage.getItem('userLocal') || '{}').id

    if (JSON.stringify(companyLocal) !== '{}') {
      companyLocal.forEach((company) => {
        CompanyMock.push({
          companyInfo: { city: company.companyInfo!.city || '' },
          companyName: company.companyName || '',
          companyStatus: { mensalSearches: 0, newReviews: 0 },
          id: company.id || '',
          periods: company.periods || ([] as any),
          userId: company.userId || '',
          jobOpportunities: [],
        })
      })

      const companiesByID = CompanyMock.filter(
        (company) => company.userId === userLocalID
      )
      return companiesByID
    }
    return [] as CompanyState[]
  }

  getBaseSelectedCompany() {
    if (!process.browser) {
      return {} as CompanyState
    }

    const selectedCompanyLocal: string =
      localStorage.getItem('selectedCompany') || '{}'

    if (JSON.stringify(selectedCompanyLocal) !== '{}') {
      const companySelected = CompanyMock.find(
        (company) => company.id === selectedCompanyLocal
      )

      return companySelected as any
    }
    return {} as CompanyState
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
      const localMockParse = JSON.parse(
        localStorage.getItem('companyLocal') || '[]'
      )
      localMockParse.push(company)
      localStorage.setItem('selectedCompany', company.id || '')
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
  changeCompanyAction(userID: string) {
    this.changeActualCompanyMutation(userID)
  }

  @Mutation
  changeActualCompanyMutation(userID: string) {
    if (process.client) {
      // localStorage.setItem('selectedCompany', userID)
      const selectedCompany = this.companiesMock.filter(
        (company) => company.id === userID
      )
      return selectedCompany
    }
  }

  @Mutation
  selectCompanyMutation(userId: string) {
    const selectedCompanyId = localStorage.getItem('selectedCompany')

    if (selectedCompanyId) {
      const companyByUserId = this.companies.find(
        (company) => company.userId === userId
      )
      this.selectedCompany = companyByUserId!
    }
  }

  @Action
  selectedCompanyAction(userId: string) {
    localStorage.getItem('selectedCompany')
    return this.selectCompanyMutation(userId)
  }
}
