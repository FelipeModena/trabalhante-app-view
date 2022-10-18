<template>
  <div>
    <NavBar :user-name="user.userName" />
    <SideBar />
    <b-container>
      <b-row>
        <b-col cols="12" lg="12">

          <nuxt />
          <BoardNews />
        </b-col>
      </b-row>
    </b-container>
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
import BoardNews from '~/components/dashboard/business/BoardNews.vue'

export default Vue.extend({
  name: 'DashboardIndexPage',
  components: { SideBar, NavBar, BoardNews },
  layout: 'dashboard',
  computed: {
    companyModuleConnection: () => getModule(CompanyModule, store),
    userModuleConnection: () => getModule(UserModule, store),
    user(): UserState {
      return this.userModuleConnection.user
    },
    companies(): [CompanyState] {
      return this.companyModuleConnection.companies
    },
  },
  methods: {
    changeUserName() {
      this.companyModuleConnection.updateCompanyAction('2')
    },
    logout() {},
  },
})
</script>
