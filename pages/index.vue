<template>
  <div>
    <RegisterBlockWithDescription  class="mb-5"/>
    <main-slider />
    <DescriptionAdvantages />
  </div>
</template>

<script lang="ts">
import { getModule } from 'nuxt-property-decorator'
import Vue from 'vue'
import RegisterBlockWithDescription from '~/components/common/RegisterBlockWithDescription.vue'
import DescriptionAdvantages from '~/components/landing/DescriptionAdvantages.vue'
import MainSlider from '~/components/landing/MainSlider.vue'
import CompanyModule from '~/store/company'
import { store } from '~/store/main'
import { CompanyState } from '~/store/types/company'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    MainSlider,
    DescriptionAdvantages,
    RegisterBlockWithDescription,
  },
  computed: {
    companyModuleConnection: () => getModule(CompanyModule, store),
    companies(): CompanyState[] {
      return this.companyModuleConnection.companies
    },
  },
})
</script>
