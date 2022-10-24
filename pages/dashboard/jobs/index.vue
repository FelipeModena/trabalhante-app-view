<template>
  <b-container>
    <b-row>
      <b-col>
        <h4>
          Vagas disponíveis pela <strong>{{ company.companyName }}</strong>
        </h4>
        {{ company }}
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <ColapseCommon />
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { getModule } from 'nuxt-property-decorator'
import Vue from 'vue'
import ColapseCommon from '../../../components/common/ColapseCommon.vue'
import CompanyModule from '~/store/company'
import store from '~/store/main'
import { CompanyState } from '~/store/types/company'
export default Vue.extend({
  name: 'JobsPage',
  components: { ColapseCommon },
  layout: 'dashboard',
  computed: {
    companyModuleConnection: () => getModule(CompanyModule, store),
    companiesJobOpportunities(): any {
      return this.companyModuleConnection.selectedCompany.jobOpportunities
    },
    company(): CompanyState {
      return this.companyModuleConnection.selectedCompany
    },
  },
})
</script>
