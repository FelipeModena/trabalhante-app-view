<template>
  <b-row>
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
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'SkeletonBase',

})
</script>
