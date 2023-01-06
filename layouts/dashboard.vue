<template>
  <div>
    <NavBar :user="user" />
    <b-container id="dashboard-nav-bar-redirector">
      <b-row class="mx-auto">
        <b-col lg="12">
          <b-nav id="nav-bar-routes-container" align="center">
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
    <SideBar
      :user-name="user.userName"
      :user-accounts="users"
      :user-id="user.id"
    />
    <nuxt />
  </div>
</template>

<script lang="ts">
import { getModule, Vue } from 'nuxt-property-decorator'
import SideBar from '~/components/public/layout/SideBar.vue'
import NavBar from '~/components/public/layout/NavBar.vue'

import CompanyModule from '~/store/company'
import { CompanyState } from '~/store/types/company'
import UserModule from '~/store/user'
import { store } from '~/store/main'
import { UserState } from '~/store/types/user'
import JobModule from '~/store/jobs'

export default Vue.extend({
  name: 'DashboardIndexPage',
  components: { SideBar, NavBar },
  layout: 'dashboard',

  computed: {
    companyModuleConnection: () => getModule(CompanyModule, store),
    userModuleConnection: () => getModule(UserModule, store),
    jobModuleConnection: () => getModule(JobModule, store),

    jobMocks(): any {
      const jobMock = this.jobModuleConnection.jobsMock
      return jobMock
    },

    companies(): CompanyState[] {
      const companies = this.companyModuleConnection.companies

      return companies
    },
    user(): UserState {
      return this.userModuleConnection.user
    },
    users(): UserState[] {
      const userTeste = this.userModuleConnection.usersMock.slice(0, 5)
      return userTeste
    },
  },
  mounted() {
    const queryId = (this.$router.currentRoute.query?.id || '1').toString()

    this.userModuleConnection.getUSerById(queryId)
  },
  created() {
    this.$nuxt.$on('changeUserNavBar', (userID: any) => {
      this.companyModuleConnection.changeCompanyAction(userID)
    })
  },
})
</script>

<style lang="scss">
body {
  background-color: rgb(249, 244, 244);
}

#dashboard-nav-bar-redirector {
  margin-top: -15px;
  margin-bottom: 15px;
}

#nav-bar-routes-container {
  box-shadow: -1px 9px 12px -10px rgba(0, 0, 0, 0.75);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}
</style>
