<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary" class="mb-3">
      <b-navbar-toggle target="nav-collapse" />
      <b-navbar-brand href="#">
        <b-img
          id="sidebar-no-header-title"
          class="bg-secondary"
          center
          src="/img/common\logo-text.png"
          width="100px"
        />
      </b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>
        <b-dropdown
        v-if="companies"
          id="dropdown-dropright"
          class="m-2"
          :text="selectedCompany.companyName"
        >
          <b-dropdown-item
            v-for="company in companies"
            :key="company.id"
            :value="company.id"
            href="#"
            @click="changeCompany(company.id || '')"
          >
            {{ company.companyName }} #{{ company.id?.substring(0, 5) }}
          </b-dropdown-item>
        </b-dropdown>
        <b-navbar-nav>
          <b-nav-item href="/resume">Home</b-nav-item>
          <b-nav-item href="/dashboard">Dashboard</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button
              variant="primary"
              size="sm"
              class="my-2 my-sm-0"
              type="submit"
              >Search</b-button
            >
          </b-nav-form> -->
          <b-nav-item v-b-toggle.sidebar-no-header>
            <b-avatar />
            <span class="mr-auto">{{ user.userName }} </span>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script lang="ts">
import { getModule } from 'nuxt-property-decorator'
import Vue from 'vue'
import CompanyModule from '~/store/company'
import { store } from '~/store/main'
import { CompanyState } from '~/store/types/company'
export default Vue.extend({
  name: 'NavBar',
  props: {
    user: {
      type: Object,
      default: () => ({
        userName: {
          type: String,
          default: 'user',
          required: true,
        },
        userId: {
          type: String,
          default: 'user',
          required: true,
        },
      }),
      required: true,
    },
  },
  computed: {
    companyModuleConnection: () => getModule(CompanyModule, store),
    companies(): CompanyState[] {
      const companies = this.companyModuleConnection.companies

      return companies
    },
    selectedCompany(): CompanyState {
      const company = this.companyModuleConnection.selectedCompany

      return company
    },
  },

  methods: {
    changeCompany(id: string) {
      this.companyModuleConnection.changeCompanyAction(id)
    },
  },
})
</script>


