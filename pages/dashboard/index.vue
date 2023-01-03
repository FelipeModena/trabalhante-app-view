<template>
  <b-container id="dashboard-index-content">
    <skeleton-base v-if="loading" />
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
import SkeletonBase from '~/components/dashboard/skeleton/index/SkeletonBase.vue'
export default Vue.extend({
  name: 'IndexPage',
  components: {
    SideBarCompanyReputation,
    CardsMainStatus,
    BoardNews,
    SkeletonBase,
  },
  layout: 'dashboard',
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 400)
  },
})
</script>

<style lang="scss" scoped></style>
