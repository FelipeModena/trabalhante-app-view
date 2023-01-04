import { Module, VuexModule } from 'vuex-module-decorators'
import { JobOpportunityState } from './types/company'
import JobsMock from './mocks/jobs/jobs.mock.json'

@Module({ namespaced: true, name: 'jobModule' })
export default class JobModule extends VuexModule {
  jobsMock: JobOpportunityState[] = JobsMock as JobOpportunityState[]
}
