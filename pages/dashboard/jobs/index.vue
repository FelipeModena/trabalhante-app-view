<template>
  <b-container>
    <JobListSimple />
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import JobListSimple from '~/components/dashboard/business/JobListSimple.vue'
export default Vue.extend({
  name: 'JobsPage',
  components: { JobListSimple },
  layout: 'dashboard',
  computed: {},
})
</script>
