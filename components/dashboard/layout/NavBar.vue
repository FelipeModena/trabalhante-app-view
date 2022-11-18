<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary" class="mb-4">
      <b-navbar-toggle target="nav-collapse" />
      <b-navbar-brand href="#">
        <b-img
          id="sidebar-no-header-title"
          center
          src="logo-text.png"
          width="40px"
        />
      </b-navbar-brand>

      <b-dropdown
        id="dropdown-dropright"
        :text="companySelected.companyName"
        class="m-2"
      >
        <b-dropdown-item
          v-for="company in companies"
          :key="company.id"
          :value="company.id"
          href="#"
          @click="changeCompany(company.id || '')"
        >
          {{ company.companyName }}
        </b-dropdown-item>
      </b-dropdown>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
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
          </b-nav-form>
          <b-nav-item v-b-toggle.sidebar-no-header>
            <b-avatar />
            <span class="mr-auto">{{ userName }}</span>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-container id="dashboard-nav-bar-redirector">
      <b-row class="mx-auto">
        <b-col lg="12">
          <b-nav align="center">
            <b-nav-item to="/dashboard">Início</b-nav-item>
            <b-nav-item to="/dashboard/jobs">Vagas</b-nav-item>
            <b-nav-item to="/dashboard/interview" disabled
              >Entrevistas</b-nav-item
            >
            <b-nav-item to="/dashboard/reports" disabled>Relatórios</b-nav-item>
            <b-nav-item to="/dashboard/collaborators" disabled
              >Colaboradores</b-nav-item
            >
            <b-nav-item to="/dashboard/configuracoes">Configurações</b-nav-item>
          </b-nav>
        </b-col>
      </b-row>
    </b-container>
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
    userName: {
      type: String,
      default: 'user',
      required: true,
    },
  },
  computed: {
    companyModuleConnection: () => getModule(CompanyModule, store),
    companies(): CompanyState[] {
      return this.companyModuleConnection.companies
    },
    companySelected(): CompanyState {
      return this.companyModuleConnection.selectedCompany
    },
  },

  methods: {
    changeCompany(id: string) {
      this.companyModuleConnection.changeCompany(id)
    },
  },
})
</script>

<style lang="scss" scoped>
#dashboard-nav-bar-redirector {
  margin-top: -15px;
  margin-bottom: 15px;
}
</style>
