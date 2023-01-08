<template>
  <b-card :title="title">
    <b-card-text>
      <b-container>
        <b-row
          ><b-col lg="3" class="text-center">
            <b-icon-chat-text-fill font-scale="10" /> </b-col
          ><b-col class="text-center" align-self="center"
            ><h3>
              {{ description }}
            </h3></b-col
          ></b-row
        >
      </b-container>
    </b-card-text>
  </b-card>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'NoContentComponent',
  props: {
    title: {
      type: String,
      default: 'Ops! Erro',
    },
    description: {
      type: String,
      default: 'Volte mais tarde!',
    },
  },
})
</script>
