import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { CompanyState } from './types/company'
import { ComplainState } from './types/complain'
@Module({ namespaced: true, name: 'companyModule' })
export default class CompanyModule extends VuexModule {
  selectedCompany: CompanyState = {} as CompanyState
  companies: CompanyState[] = [
    {
      id: '1',
      userId: '1',
      companyName: 'Kroitor Software Dev House',
      companyStatus: { mensalSearches: 124, newReviews: 0 },
      companyInfo: {
        city: 'São Paulo',
      },
      jobOpportunities: [
        {
          id: '1',
          name: 'Desenvolvedor pleno Assembly',
          status: true,
          description:
            'Sample generic cover letter. It is always advisable to personalize your general cover letter for the target job opportunity. However, there are  situations when it is appropriate to use a general cover letter. These are usually instances where you are not submitting your resume in response to a job posting or to a specific employer.      You can use a general cover letter when you go to a job fair and you are giving your resume and cover letter to a number of potential employers for different jobs.      ',
          link: 'generic-cover-letter',
        },
        {
          id: '2',
          name: 'Desenvolvedor junior Vue',
          status: true,
          description:
            'Sample generic cover letter. It is always advisable to personalize your general cover letter for the target job opportunity. However, there are  situations when it is appropriate to use a general cover letter. These are usually instances where you are not submitting your resume in response to a job posting or to a specific employer.      You can use a general cover letter when you go to a job fair and you are giving your resume and cover letter to a number of potential employers for different jobs.      ',
          link: 'generic-cover-letter',
        },
      ],
      periods: [
        {
          id: '1',
          period: 6,
          averageGrade: 9.8,
          publicEvaluationsReplyTotal: 1425,
          publicEvaluationsTotal: 1564,
        },
        {
          id: '2',
          period: 12,
          averageGrade: 6.8,
          publicEvaluationsReplyTotal: 3621,
          publicEvaluationsTotal: 3821,
        },
        {
          id: '3',
          period: 16,
          averageGrade: 3.8,
          publicEvaluationsReplyTotal: 7345,
          publicEvaluationsTotal: 8745,
        },
      ],
    },
    {
      id: '2',
      userId: '1',
      companyName: 'Startup Generica de Puff',
      companyStatus: { mensalSearches: 124, newReviews: 0 },
      jobOpportunities: [
        {
          id: '1',
          name: 'Desenvolvedor pleno em puff',
          status: true,
          description:
            'Sample generic cover letter. It is always advisable to personalize your general cover letter for the target job opportunity. However, there are  situations when it is appropriate to use a general cover letter. These are usually instances where you are not submitting your resume in response to a job posting or to a specific employer.      You can use a general cover letter when you go to a job fair and you are giving your resume and cover letter to a number of potential employers for different jobs.      ',
          link: 'generic-cover-letter',
          clicks:34
        },
        {
          id: '2',
          name: 'Desenvolvedor pleno em puff fancy ', 
          status: true,
          description:
            'Sample generic cover letter. It is always advisable to personalize your general cover letter for the target job opportunity. However, there are  situations when it is appropriate to use a general cover letter. These are usually instances where you are not submitting your resume in response to a job posting or to a specific employer.      You can use a general cover letter when you go to a job fair and you are giving your resume and cover letter to a number of potential employers for different jobs.      ',
          link: 'generic-cover-letter',
        },
      ],
      periods: [
        {
          id: '1',
          period: 6,
          averageGrade: 9.8,
          publicEvaluationsReplyTotal: 1425,
          publicEvaluationsTotal: 1564,
        },
        {
          id: '2',
          period: 12,
          averageGrade: 6.8,
          publicEvaluationsReplyTotal: 3621,
          publicEvaluationsTotal: 3821,
        },
        {
          id: '3',
          period: 16,
          averageGrade: 3.8,
          publicEvaluationsReplyTotal: 7345,
          publicEvaluationsTotal: 8745,
        },
      ],
    },
  ]

  complains: ComplainState[] = [
    {
      id: '1',
      companyId: '1',
      title: 'Complain 1',
      description: 'Complain 1 description',
      status: 'open',
      userStatus: 3,
      createdAt: '2020-01-01',
      updatedAt: '2020-01-01',
      categories: [{ id: '1', name: 'Category 1' }],
    },
    {
      id: '2',
      companyId: '1',
      title: 'Complain 2',
      description: 'Complain 2 description',
      status: 'open',
      userStatus: 1,
      createdAt: '2020-01-01',
      updatedAt: '2020-01-01',
      categories: [{ id: '1', name: 'Category 1' }],
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

  @Mutation
  addNewCompanyMutation(company: CompanyState) {
    this.companies.push(company)
  }

  @Action
  addNewCompanyAction(company: CompanyState): number {
    const objectToSave = { ...company }

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
  getBaseCompany() {
    if (process.client) {
      const companySelected = localStorage.getItem('companySelected')
      if (companySelected) {
        this.changeCompanyMutation(companySelected)
      } else this.changeCompanyMutation('1')
    }
  }

  @Mutation
  changeCompanyMutation(id: string) {
    const company = this.companies.find((company) => company.id === id)!

    this.selectedCompany = company
  }
}
