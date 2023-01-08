<template>
  <b-container fluid>
    <b-row> </b-row>
    <BestCompanies />
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import BestCompanies from '~/components/resume/BestCompanies.vue'
export default Vue.extend({
  name: 'ResumePage',
  components: { BestCompanies },
})
</script>
