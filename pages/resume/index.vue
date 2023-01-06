<template>
  <b-container fluid>
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
