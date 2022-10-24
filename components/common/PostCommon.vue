<template>
  <b-card>
    <span>{{ rate }}</span>
    <p v-if="userStatus === 1">Funcionário atual</p>
    <p v-else-if="userStatus === 2">Ex-funcionário</p>
    <p v-else>Não é mais funcionário</p>
    <h4>{{ title }}</h4>
    <p>{{ content }}</p>
    <template #footer>
      <b-container>
        <b-row>
          <b-col>
            <b-btn>Util</b-btn>
            <b-btn>Compartilhar</b-btn>
          </b-col>
          <b-col>
            <b-btn>Recorrer</b-btn>
          </b-col>
        </b-row>
      </b-container>
    </template>
  </b-card>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'PostCommon',
  props: {
    title: {
      type: String,
      default: 'Generic Title',
    },
    content: {
      type: String,
      default: 'Content of the post',
    },
    date: {
      type: String,
      default: 'Date',
    },
    rate: {
      type: Number,
      default: 4,
    },
    userStatus: {
      type: Number,
      default: 1,
    },
  },
})
</script>

<style lang="scss" scoped></style>
