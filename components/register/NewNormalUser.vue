<template>
  <div>Sou nrormal</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'NewCompanyUser',
  props: {
    cities: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      companyName: '',
      companyCnpj: '',
      companyDescription: '',
      companyAddress: '',
      companyCity: '',
      companyState: '',
      companyPhone: '',
      companyEmail: '',
      companyPassword: '',
      companyPasswordConfirm: '',
    }
  },
  mounted() {},
  methods: {},
})
</script>
