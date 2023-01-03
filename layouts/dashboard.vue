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

export default Vue.extend({
  name: 'DashboardIndexPage',
  components: { SideBar, NavBar },
  layout: 'dashboard',

  computed: {
    companyModuleConnection: () => getModule(CompanyModule, store),
    userModuleConnection: () => getModule(UserModule, store),

    companies(): CompanyState[] {
      return this.companyModuleConnection.companies
    },
    companiesMock(): CompanyState[] {
      return this.companyModuleConnection.companiesMock
    },
    user(): UserState {
      return this.userModuleConnection.user
    },
    users(): UserState[] {
      return this.userModuleConnection.usersMock
    },
  },
  mounted() {
    const queryId = (this.$router.currentRoute.query?.id || '1').toString()

    this.companyModuleConnection.getBaseCompany(queryId)
    this.userModuleConnection.getUSerById(queryId)
  },
  created() {
    this.$nuxt.$on('changeUserNavBar', (id: any) => {
      this.companyModuleConnection.getBaseCompany(id)
    })
  },
})
</script>

<style lang="scss">
body {
  background-color: rgb(249, 244, 244);
}
</style>
