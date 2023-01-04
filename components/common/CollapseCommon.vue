<template>
  <div>
    <b-button v-b-toggle="'collapse' + id" :variant="variant" class="m-1 w-100">{{
      title
    }}</b-button>

    <b-collapse :id="'collapse' + id">
      <slot name="content" />
    </b-collapse>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'CollapseCommonComponent',
  props: {
    variant: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped></style>
