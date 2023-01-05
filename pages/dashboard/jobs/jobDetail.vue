<template>
  <b-container>
    <b-row>
      <b-col>
        <b-card>
          <b-card-body>
            <b-form>
              <b-form-group
                id="input-group-1"
                label="Título:"
                label-for="input-1"
                description="Título da vaga de emprego"
              >
                <b-form-input
                  id="input-1"
                  v-model="jobOpportunity.title"
                  required
                  placeholder="Título da vaga de emprego"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Descrição:"
                label-for="input-2"
                description="Descrição da vaga de emprego"
              >
                <b-form-textarea
                  id="input-2"
                  v-model="jobOpportunity.description"
                  required
                  placeholder="Descrição da vaga de emprego"
                ></b-form-textarea>
              </b-form-group>

              <b-form-group
                id="input-group-3"
                label="Salário:"
                label-for="input-3"
                description="Salário da vaga de emprego"
              >
                <b-form-input
                  id="input-3"
                  v-model="jobOpportunity.salary"
                  required
                  placeholder="Salário da vaga de emprego"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-4"
                label="Status:"
                label-for="input-4"
                description="Status da vaga de emprego"
              >
                <b-form-checkbox
                  id="input-4"
                  v-model="jobOpportunity.status"
                  switch
                  :true-value="true"
                  :false-value="false"
                >
                  Ativa
                </b-form-checkbox>
              </b-form-group>

              <b-button variant="primary" @click="onSubmit">Salvar</b-button>
            </b-form>
          </b-card-body>
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
import { JobOpportunityState } from '~/store/types/company'
export default Vue.extend({
  name: 'JobDetailPage',
  layout: 'dashboard',
  computed: {
    jobModuleConnection: () => getModule(JobModule, store),
    companyModuleConnection: () => getModule(CompanyModule, store),

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
  methods: {
    onSubmit(event: Event) {
      event.preventDefault()

      this.jobModuleConnection.updateJobOpportunityAction(this.jobOpportunity)
      this.companyModuleConnection.changeJobOpportunityAction(
        this.jobOpportunity
      )
      this.$router.push('/dashboard/jobs')
    },
  },
})
</script>
