<template>
  <b-sidebar
    id="sidebar-no-header"
    aria-labelledby="sidebar-no-header-title"
    no-header
    shadow
  >
    <template #default="{ hide }">
      <div>

        <p></p>
        <nav class="mb-3">
          <b-nav vertical>
            <b-nav-item active @click="hide">Active</b-nav-item>
            <b-nav-item href="#link-1" @click="hide">Link</b-nav-item>
            <b-nav-item href="#link-2" @click="hide">Another Link</b-nav-item>
          </b-nav>
        </nav>
        <b-button variant="primary" block @click="hide">Close Sidebar</b-button>
      </div>
    </template>
  </b-sidebar>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
