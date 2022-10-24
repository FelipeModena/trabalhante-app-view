<template>
  <div>
    <NavBar :user-name="user.userName" />
    <SideBar :user-name="user.userName" />

    <nuxt />
  </div>
</template>

<script lang="ts">
import { getModule, Vue } from 'nuxt-property-decorator'
import SideBar from '~/components/dashboard/layout/SideBar.vue'
import NavBar from '~/components/dashboard/layout/NavBar.vue'

import store from '~/store/main'
import CompanyModule from '~/store/company'
import { CompanyState } from '~/store/types/company'
import UserModule from '~/store/user'
import { UserState } from '~/store/types/user'

export default Vue.extend({
  name: 'DashboardIndexPage',
  components: { SideBar, NavBar },
  layout: 'dashboard',
  computed: {
    companyModuleConnection: () => getModule(CompanyModule, store),
    userModuleConnection: () => getModule(UserModule, store),
    user(): UserState {
      return this.userModuleConnection.user
    },
    companies(): CompanyState[] {
      return this.companyModuleConnection.companies
    },
  },
  mounted() {
    this.companyModuleConnection.getBaseCompany()
  },
  methods: {
    changeUserName() {
      this.companyModuleConnection.updateCompanyAction('2')
    },
    logout() {},
  },
})
</script>

<style lang="scss">
body {
  background-color: rgb(249, 244, 244);
}
</style>
