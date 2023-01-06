<template>
  <b-col>
    <h2>{{ title }}</h2>
    <b-list-group>
      <b-list-group-item
        v-for="(company, index) in companies"
        :key="company.id"
        :to="{ path: '/resume/company', query: { id: company.id } }" 
      >
        <b-row class="text-center">
          <b-col cols="4">
            <span :class="'text-' + variant">{{ index }}°</span>
            <b-avatar :src="company.logo" variant="outline-success"></b-avatar>
          </b-col>
          <b-col cols="8">
            <b-row>
              <b-col>
                <h4>{{ company.companyName }}</h4>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-list-group-item>
    </b-list-group>
  </b-col>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { CompanyState } from '~/store/types/company'
export default Vue.extend({
  name: 'CompaniesListComponent',
  props: {
    companies: {
      type: Array as PropType<Array<CompanyState>>,
      required: true,
    },
    variant: {
      type: String,
      default: 'success',
    },
    title: { type: String, required: true },
  },
})
</script>
