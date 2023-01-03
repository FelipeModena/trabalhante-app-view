<template>
  <section>
    <b-avatar
      :id="'popover-' + id + 'relevant'"
      icon="lightbulb"
      button
      @click="voteSimple"
    ></b-avatar>
    <!-- <b-popover
      :target="'popover-' + 1 + 'relevant'"
      triggers="hover"
      placement="left"
    >
      <b-avatar-group>
        <b-avatar icon="hand-thumbs-up-fill" variant="success"></b-avatar>
        <b-avatar icon="hand-thumbs-down-fill" variant="danger"></b-avatar>
      </b-avatar-group>
    </b-popover> -->
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  methods: {
    voteSimple() {
      this.$nuxt.$emit('voteEvent', 'relevant')
    },
  },
})
</script>
