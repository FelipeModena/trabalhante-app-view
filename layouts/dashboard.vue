<template>
  <div>
    <NavBar :user="user" />
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
import SideBar from '~/components/dashboard/layout/SideBar.vue'
import NavBar from '~/components/dashboard/layout/NavBar.vue'

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
</style>
