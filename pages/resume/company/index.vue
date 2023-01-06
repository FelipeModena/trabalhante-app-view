<template>
  <b-container>
    <b-row>
      <b-col>
        <b-card>
          <b-row>
            <b-col cols="4">
              <b-img :src="companySelected.logo" />
            </b-col>
            <b-col>
              <h4>{{ companySelected.companyName }}</h4></b-col
            >
          </b-row>
          <b-row>
            <b-col align-self="center" cols="8">
              <h5>{{ companySelected.description }}</h5>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { getModule } from 'nuxt-property-decorator'
import Vue from 'vue'
import CompanyModule from '~/store/company'
import JobModule from '~/store/jobs'
import { store } from '~/store/main'
import { CompanyState, JobOpportunityState } from '~/store/types/company'

export default Vue.extend({
  name: 'JobDetailPage',
  layout: 'companyDescription',
  computed: {
    jobModuleConnection: () => getModule(JobModule, store),
    companyModuleConnection: () => getModule(CompanyModule, store),

    companySelected(): CompanyState {
      const queryCompanyId = this.$route.query.id

      const company: any = {
        ...this.companyModuleConnection.companiesMock.find(
          (company) => company.id === queryCompanyId
        ),
      }

      return company
    },

    jobOpportunity(): JobOpportunityState {
      const queryJobId = this.$route.query.id

      const jobOpportunity = {
        ...this.jobModuleConnection.jobsMock.find(
          (jobOpportunity) => jobOpportunity.id === queryJobId
        ),
      }

      return (jobOpportunity as JobOpportunityState) || {}
    },
  },
})
</script>
