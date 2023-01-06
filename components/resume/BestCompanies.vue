<template>
  <b-row>
    <b-col>
      <h1>Ranking das empresas</h1>
      <h3>Referente aos últimos 30 dias</h3>
      <p>
        Com base nas avaliações que os consumidores deixam para as empresas das
        quais reclamaram, a gente constrói nossos rankings. É assim que nosso
        site ajuda as pessoas a saberem em quais marcas podem confiar mais!
      </p>
    </b-col>
    <b-col lg="8" sm="12">
      <b-container>
        <b-row>
          <companies-list
            :companies="goodCompanies"
            :variant="'success'"
            :title="'Melhores empresas que mais resolveram'"
          />
          <companies-list
            :companies="badCompanies"
            :variant="'danger'"
            :title="'Empresas em que mais reclamaram'"
          />
        </b-row>
      </b-container>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import { getModule } from 'nuxt-property-decorator'
import Vue from 'vue'
import CompaniesList from './ComponentsBestCompanies/CompaniesList.vue'
import CompanyModule from '~/store/company'
import { store } from '~/store/main'
import { CompanyState } from '~/store/types/company'

const companiesToShow = 5

export default Vue.extend({
  name: 'BestCompaniesComponent',
  components: { CompaniesList },
  computed: {
    companyModuleConnection: () => getModule(CompanyModule, store),
    goodCompanies(): CompanyState[] {
      const bestGoodCompanies =
        this.companyModuleConnection.companiesMock.filter(
          (company) => company.companyInfo!.lastMonthGrade! > 80
        )

      return bestGoodCompanies.slice(0, companiesToShow)
    },
    badCompanies(): CompanyState[] {
      const bestWorstsCompanies =
        this.companyModuleConnection.companiesMock.filter(
          (company) =>
            company.companyInfo!.lastMonthGrade! > 0 &&
            company.companyInfo!.lastMonthGrade! < 30
        )
      return bestWorstsCompanies.slice(0, companiesToShow)
    },
  },
})
</script>
