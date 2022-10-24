<template>
  <b-card header-tag="header" header="Reputação">
    <b-tabs>
      <b-tab
        v-for="(companyPeridod, index) in companiesPeriod"
        :key="index"
        :title="companyPeridod.period + ' meses'"
      >
        <b-container class="pt-2">
          <b-row
            v-if="
              companyPeridod.averageGrade > 7 &&
              companyPeridod.averageGrade <= 10
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
              companyPeridod.averageGrade < 7 &&
              companyPeridod.averageGrade >= 5
            "
          >
            <b-col> <b-icon-emoji-neutral variant="" font-scale="4" /></b-col>
            <b-col>
              <h5>Bom</h5>
            </b-col>
          </b-row>
          <b-row v-if="companyPeridod.averageGrade < 5">
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
                    {{ companyPeridod.publicEvaluationsTotal }}</span
                  ></b-card
                ></b-col
              >
              <b-col>
                <b-card>
                  <span>Respondidas <br /></span>
                  <span
                    ><b-icon-reply-all-fill />
                    {{ companyPeridod.publicEvaluationsReplyTotal }}</span
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
import store from '~/store/main'
import { PeriodCompanyEvaluationState } from '~/store/types/company'
export default Vue.extend({
  computed: {
    companyModuleConnection: () => getModule(CompanyModule, store),
    companiesPeriod(): PeriodCompanyEvaluationState[] {
      return this.companyModuleConnection.selectedCompany.periods ?? []
    },
  },
})
</script>
