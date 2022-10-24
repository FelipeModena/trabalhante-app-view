<template>
  <b-container id="dashboard-index-content">
    <b-row v-if="loading">
      <b-col lg="4">
        <b-skeleton-img></b-skeleton-img>
      </b-col>
      <b-col lg="7">
        <b-skeleton-table
          :rows="1"
          :columns="3"
          :table-props="{ bordered: true, striped: true }"
        ></b-skeleton-table>
        <b-card v-for="index in 4" :key="index" class="my-3">
          <b-skeleton animation="wave" width="85%"></b-skeleton>
          <b-skeleton animation="wave" width="55%"></b-skeleton>
          <b-skeleton animation="wave" width="70%"></b-skeleton>
        </b-card>
      </b-col>
    </b-row>
    <b-row v-else>
      <b-col lg="4">
        <SideBarCompanyReputation />
      </b-col>
      <b-col lg="7">
        <CardsMainStatus />
        <BoardNews />
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import SideBarCompanyReputation from '~/components/dashboard/business/index/SideBarCompanyReputation.vue'
import CardsMainStatus from '~/components/dashboard/business/index/CardsMainStatus.vue'
import BoardNews from '~/components/dashboard/business/index/BoardNews.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { SideBarCompanyReputation, CardsMainStatus, BoardNews },
  layout: 'dashboard',
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 2000)
  },
})
</script>

<style lang="scss" scoped>
#dashboard-index-content {
}
</style>
