<template>
  <b-container>
    <b-row>
      <b-col>
        <b-card>
          <b-container>
            <b-row>
              <b-col cols="4">
                <b-img  width="100px" :src="companySelected.logo" />
              </b-col>
              <b-col>
                <h4>{{ companySelected.companyName }}</h4>
                <h5>
                  <strong>Cidade: </strong
                  >{{ companySelected.companyInfo?.city }}
                </h5>
                <h5>
                  <strong>Nota última avaliação </strong>
                  {{ companySelected.companyInfo?.lastMonthGrade }}/100
                  <b-icon-emoji-smile-fill
                    v-if="companySelected.companyInfo.lastMonthGrade >= 60"
                    variant="success"
                  />
                  <b-icon-emoji-neutral-fill
                    v-else-if="
                      companySelected.companyInfo.lastMonthGrade <= 60 &&
                      companySelected.companyInfo?.lastMonthGrade >= 40
                    "
                    variant="warning"
                  />
                  <b-icon-emoji-angry-fill v-else variant="danger" />
                </h5>
                <p>
                  <strong>Data de criação: </strong
                  >{{ companySelected.createdAt }}
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-row>
                <b-col align-self="center">
                  <h4>Descrição da empresa</h4>
                  <h5>{{ companySelected.description }}</h5>
                </b-col>
                <b-col>
                  <b-card bg-variant="info" class="text-white mb-5" 
                    ><h4>
                      Vagas abertas disponíveis:
                      {{ companySelected.jobOpportunities?.length }}
                    </h4></b-card
                  >
                  <b-row
                    ><b-col><h4>Características</h4></b-col></b-row
                  >
                  <b-row
                    v-for="(attribute, index) in companySelected.attributes"
                    :key="index"
                  >
                    <b-col
                      ><strong>{{ attribute.attribute }}</strong></b-col
                    >
                    <b-col>
                      <b-progress animated
                        :variant="
                          attribute.rating >= 70
                            ? 'success'
                            : attribute.rating < 70 && attribute.rating >= 40
                            ? 'warning'
                            : 'danger'
                        "
                        :value="attribute.rating"
                        :max="100"
                        show-value
                        class="mb-3"
                      ></b-progress>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row> </b-row
          ></b-container>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { getModule } from 'nuxt-property-decorator'
import Vue from 'vue'
import CompanyModule from '~/store/company'
import JobModule from '~/store/jobs'
import { store } from '~/store/main'
import { CompanyState, JobOpportunityState } from '~/store/types/company'

export default Vue.extend({
  name: 'JobDetailPage',
  layout: 'companyDescription',
  computed: {
    jobModuleConnection: () => getModule(JobModule, store),
    companyModuleConnection: () => getModule(CompanyModule, store),

    companySelected(): CompanyState {
      const queryCompanyId = this.$route.query.id

      const company: CompanyState = {
        ...this.companyModuleConnection.companiesMock.find(
          (company) => company.id === queryCompanyId
        ),
      } as CompanyState
      return company
    },

    jobOpportunity(): JobOpportunityState {
      const queryJobId = this.$route.query.id

      const jobOpportunity = {
        ...this.jobModuleConnection.jobsMock.find(
          (jobOpportunity) => jobOpportunity.id === queryJobId
        ),
      }

      return (jobOpportunity as JobOpportunityState) || {}
    },
  },
})
</script>
