import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { JobOpportunityState } from './types/company'
import JobsMock from './mocks/jobs/jobs.mock.json'

@Module({ namespaced: true, name: 'jobModule' })
export default class JobModule extends VuexModule {
  jobsMock: JobOpportunityState[] = JobsMock as JobOpportunityState[]

  @Action
  updateJobOpportunityAction(job: JobOpportunityState) {
    this.updateJobOpportunityMutation(job)
  }

  @Mutation
  updateJobOpportunityMutation(job: JobOpportunityState) {
    this.jobsMock = this.jobsMock.map((jobMock) => {
      if (jobMock.id === job.id) {
        return job
      }
      return jobMock
    })
  }
}
