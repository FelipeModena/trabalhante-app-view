<template>
  <b-container>
    <b-row>
      <b-col>
        <b-card>
          <b-card-body>
            <b-card-title>
              {{ jobOpportunity.title }}
            </b-card-title>
            <b-card-text>
              {{ jobOpportunity.description }}
            </b-card-text>
            <b-card-text>
              <strong>Status:</strong>
              {{ jobOpportunity.status }}
            </b-card-text>
            <b-card-text>
              <strong>Salário:</strong>
              {{ jobOpportunity.salary }}
            </b-card-text>
            <b-button
              :to="{
                path: '/dashboard/jobs/jobdetail',
                query: { id: jobOpportunity.id },
              }"
              variant="primary"
              class="m-1"
              >Editar</b-button
            >
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { getModule } from 'nuxt-property-decorator'
import Vue from 'vue'
import JobModule from '~/store/jobs'
import { store } from '~/store/main'
import { JobOpportunityState } from '~/store/types/company'
export default Vue.extend({
  name: 'JobDetailPage',
  layout: 'dashboard',
  computed: {
    jobModuleConnection: () => getModule(JobModule, store),

    jobOpportunity(): JobOpportunityState {
      const queryJobId = this.$route.query.id

      const jobOpportunity = this.jobModuleConnection.jobsMock.find(
        (jobOpportunity) => jobOpportunity.id === queryJobId
      )

      return (jobOpportunity as JobOpportunityState) || {}
    },
  },
})
</script>
