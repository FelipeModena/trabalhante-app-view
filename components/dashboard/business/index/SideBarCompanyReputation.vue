<template>
  <b-card header-tag="header" header="Reputação">
    <b-tabs>
      <b-tab
        v-for="(companyPeriod, index) in companiesPeriod"
        :key="index"
        :title="companyPeriod.period + ' meses'"
      >
        <b-container class="pt-2">
          <b-row
            v-if="
              companyPeriod.averageGrade >= 70 &&
              companyPeriod.averageGrade <= 100
            "
          >
            <b-col>
              <b-icon-emoji-smile variant="success" font-scale="4" />
            </b-col>

            <b-col>
              <h5>Sucesso!</h5>
            </b-col>
          </b-row>

          <b-row
            v-if="
              companyPeriod.averageGrade < 70 &&
              companyPeriod.averageGrade >= 50
            "
          >
            <b-col> <b-icon-emoji-neutral variant="" font-scale="4" /></b-col>
            <b-col>
              <h5>Bom</h5>
            </b-col>
          </b-row>
          <b-row v-if="companyPeriod.averageGrade < 50">
            <b-col>
              <b-icon-emoji-angry variant="danger" font-scale="4"
            /></b-col>
            <b-col>
              <h5>Ruim</h5>
            </b-col>
          </b-row>

          <div class="mt-3">
            <b-row>
              <b-col>
                <b-card
                  ><span>Reclamações <br /></span>
                  <span
                    ><b-icon-megaphone />
                    {{ companyPeriod.publicEvaluationsTotal }}</span
                  ></b-card
                ></b-col
              >
              <b-col>
                <b-card>
                  <span>Respondidas <br /></span>
                  <span
                    ><b-icon-reply-all-fill />
                    {{ companyPeriod.publicEvaluationsReplyTotal }}</span
                  ></b-card
                >
              </b-col>
            </b-row>
          </div>
        </b-container>
      </b-tab>
    </b-tabs>
    <template #footer> </template>
  </b-card>
</template>
<script lang="ts">
import { getModule } from 'nuxt-property-decorator'
import Vue from 'vue'
import CompanyModule from '~/store/company'
import { store } from '~/store/main'
import { PeriodCompanyEvaluationState } from '~/store/types/company'

declare module 'vue/types/vue' {
  interface Vue {
    companyModuleConnection: () => any
    companiesPeriod: () => any
  }
}
export default Vue.extend({
  computed: {
    companyModuleConnection: () => getModule(CompanyModule, store),
    companiesPeriod(): PeriodCompanyEvaluationState[] {
      return this.companyModuleConnection.selectedCompany.periods ?? []
    },
  },
})
</script>
