<template>
  <b-navbar toggleable="lg" type="dark" variant="primary" class="mb-3">
    <b-navbar-toggle target="nav-collapse" />
    <b-navbar-brand href="#">
      <b-img
        id="sidebar-no-header-title"
        center
        src="/img/common\logo-text-white.png"
        width="100px"
      />
    </b-navbar-brand>
    <b-collapse id="nav-collapse" is-nav>
      <b-dropdown
        v-show="companies.length !== 0"
        id="dropdown-dropright"
        class="m-2"
        :text="selectedCompany?.companyName"
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
        <b-nav-item href="/dashboard" :disabled="!user.userName"
          >Dashboard</b-nav-item
        >
      </b-navbar-nav>
      <b-navbar-nav class="mx-auto">
        <b-card class="w-100" border-variant="info">
          <search-user />
        </b-card>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item v-if="!!user.userName" v-b-toggle.sidebar-no-header>
          <b-avatar></b-avatar>
          <span class="mr-auto">{{ user.userName }} </span>
        </b-nav-item>
        <b-nav-item v-else href="/login"
          ><b-button variant="danger"
            >Você ainda nao está logado</b-button
          ></b-nav-item
        >
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script lang="ts">
import { getModule } from 'nuxt-property-decorator'
import Vue from 'vue'
import SearchUser from '~/components/resume/SearchUser.vue'
import CompanyModule from '~/store/company'
import { store } from '~/store/main'
import { CompanyState } from '~/store/types/company'
export default Vue.extend({
  components: { SearchUser },
  name: 'NavBar',
  props: {
    user: {
      default: null,
      type: Object as () => {
        userName: {
          type: String
          required: true
          default: 'null'
        }
        userId: {
          type: String
          required: true
        }
      },
    },
  },
  computed: {
    companyModuleConnection: () => getModule(CompanyModule, store),
    companies(): CompanyState[] {
      const companies = this.companyModuleConnection.companies

      return companies || []
    },
    selectedCompany(): CompanyState {
      const company = this.companyModuleConnection.selectedCompany
      if (!company) {
        // this.$router.push('/login/register')
      }
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
