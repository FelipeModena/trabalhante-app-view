<template>
  <b-container> </b-container>
</template>

<script lang="ts">
import { getModule } from 'nuxt-property-decorator'
import Vue from 'vue'
import CompanyModule from '~/store/company'
import store from '~/store/main'
import { CompanyState } from '~/store/types/company'
export default Vue.extend({
  computed: {
    companyModuleConnection: () => getModule(CompanyModule, store),
    companies(): [CompanyState] {
      return this.companyModuleConnection.companies
    },
  },
})
</script>
