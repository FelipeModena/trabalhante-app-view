<template>
  <b-row v-if="companiesJobOpportunities">
    <b-col
      v-for="(jobOpportunity, index) in companiesJobOpportunities"
      :key="index"
      cols="12"
    >
      <CollapseCommon
        :id="jobOpportunity.id"
        :title="jobOpportunity.title"
        class="my-4"
        :variant="jobOpportunity.status === true ? '' : 'danger'"
      >
        <template slot="content">
          <b-card>
            <p><strong>Nome:</strong> {{ jobOpportunity.title }}</p>
            <p>
              <strong>Status:</strong>
              <span
                :class="
                  'text-' +
                  (jobOpportunity.status === true ? 'success' : 'danger')
                "
              >
                {{ jobOpportunity.status === true ? 'Ativa' : 'Inativa' }}</span
              >
            </p>
            <p>
              <strong>Descrição:</strong>
              {{
                jobOpportunity.description?.slice(0, 400) + '...' ??
                'Sem descrição'
              }}
            </p>
            <p>
              <strong>Salário:</strong>
              {{ jobOpportunity.salary }}
            </p>
            <b-button
              :to="{
                path: '/dashboard/jobs/jobDetail',
                query: { id: jobOpportunity.id },
              }"
              variant="primary"
              class="m-1"
              >Editar</b-button
            >
          </b-card>
        </template></CollapseCommon
      >
    </b-col>
  </b-row>
</template>

<script lang="ts">
import Vue from 'vue'
import { getModule } from 'nuxt-property-decorator'
import CollapseCommon from '../../../components/common/CollapseCommon.vue'
import { JobOpportunityState } from '~/store/types/company'
import CompanyModule from '~/store/company'
import { store } from '~/store/main'
export default Vue.extend({
  name: 'JobListSimple',
  components: { CollapseCommon },
  data() {
    return {
      jobTableItems: [],
    }
  },
  computed: {
    companyModuleConnection: () => getModule(CompanyModule, store),
    companiesJobOpportunities(): JobOpportunityState[] {
      return this.companyModuleConnection.selectedCompany.jobOpportunities?.map(
        (jobOpportunity) => {
          return {
            id: jobOpportunity.id,
            title: jobOpportunity.title,
            status: jobOpportunity.status,
            salary: jobOpportunity.salary,
            description: jobOpportunity.description,
          }
        }
      ) as JobOpportunityState[]
    },
  },
})
</script>
