<template>
  <b-row v-if="companiesJobOpportunities" class="text-center">
    <b-col lg="">
      <b-card title="Vagas ativas">
        <h4>
          {{
            companiesJobOpportunities?.length
              ? companiesJobOpportunities?.length
              : ''
          }}
        </h4>
        <template #footer> <nuxt-link to="#">Ver mais</nuxt-link> </template>
      </b-card>
    </b-col>
    <b-col>
      <b-card bg-variant="" title="Novas reviews">
        <h4>{{ companies.companyStatus.newReviews ?? '' }}</h4>
        <template #footer> <nuxt-link to="#">Ver mais</nuxt-link> </template>
      </b-card>
    </b-col>
    <b-col>
      <b-card title="Busca mensal">
        <h4>{{ companies.companyStatus.mensalSearches ?? '' }}</h4>
        <template #footer> <nuxt-link to="#">Ver mais</nuxt-link> </template>
      </b-card>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import { getModule } from 'nuxt-property-decorator'
import Vue from 'vue'
import CompanyModule from '~/store/company'
import { store } from '~/store/main'
import { CompanyState } from '~/store/types/company'
export default Vue.extend({
  name: 'CardsMainStatus',
  computed: {
    companyModuleConnection: () => getModule(CompanyModule, store),
    companiesJobOpportunities(): any {
      if (this.companyModuleConnection.selectedCompany) {
        return this.companyModuleConnection.selectedCompany.jobOpportunities
      } else return undefined
    },
    companies(): CompanyState {
      return this.companyModuleConnection.selectedCompany
    },
  },
})
</script>
