<template>
  <b-container>
    <b-row>
      <b-col>
        <b-card bg-variant="" title="Convites">
          <div>
            <p>COnteudo interior</p>
          </div>
          <template #footer> ROdape </template>
        </b-card>
      </b-col>
      <b-col>
        <b-card bg-variant="" title="Review status">
          <div>
            <p>COnteudo interior</p>
          </div>
          <template #footer> ROdape </template>
        </b-card>
      </b-col>
      <b-col>
        <b-card></b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  layout: 'dashboard',
})
</script>
