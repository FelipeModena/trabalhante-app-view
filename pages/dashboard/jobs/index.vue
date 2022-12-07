<template>
  <b-container>
    <b-row>
      <b-col
        v-for="(jobOpportunity, index) in companiesJobOpportunities"
        :key="index"
        cols="12"
      >
        <CollapseCommon :id="jobOpportunity.id" :title="jobOpportunity.name" class="my-4">
          <template slot="content">
            <b-card >
              {{jobOpportunity}}
              <p><strong>Nome:</strong> {{ jobOpportunity.name }}</p>
              <p>
                <strong>Status:</strong>
                <span class="text-success">{{
                  jobOpportunity.status === true ? 'Ativa' : 'Inativa'
                }}</span>
              </p>
              <p>
                <strong>Descrição:</strong>
                {{ jobOpportunity.description }}
              </p>
            </b-card>
          </template></CollapseCommon
        >
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { getModule } from 'nuxt-property-decorator'
import Vue from 'vue'
import CollapseCommon from '../../../components/common/CollapseCommon.vue'
import CompanyModule from '~/store/company'
import { CompanyState, JobOpportunityState } from '~/store/types/company'
import { store } from '~/store/main'
export default Vue.extend({
  name: 'JobsPage',
  components: { CollapseCommon },
  layout: 'dashboard',
  computed: {
    companyModuleConnection: () => getModule(CompanyModule, store),
    companiesJobOpportunities(): JobOpportunityState[] {
      return this.companyModuleConnection.selectedCompany.jobOpportunities ?? []
    },
    company(): CompanyState {
      return this.companyModuleConnection.selectedCompany
    },
  },
})
</script>
