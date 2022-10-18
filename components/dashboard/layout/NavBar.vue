<template>
  <b-navbar toggleable="lg" type="dark" variant="primary" class="mb-4">
    <b-navbar-toggle target="nav-collapse" />
    <b-navbar-brand href="#">
      <b-img id="sidebar-no-header-title" center src="logo-text.png" width="40px" />
    </b-navbar-brand>

    <nuxt-link to="/">index</nuxt-link>
    <nuxt-link to="/dashboard">dashboard</nuxt-link>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="Search"
          ></b-form-input>
          <b-button
            variant="primary"
            size="sm"
            class="my-2 my-sm-0"
            type="submit"
            >Search</b-button
          >
        </b-nav-form>
        <b-nav-item v-b-toggle.sidebar-no-header>
          <b-avatar />
          <span class="mr-auto">{{ userName }}</span>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'NavBar',
  props: {
    userName: {
      type: String,
      default: 'user',
      required: true,
    },
  },
  computed: {
    user() {
      return 'User name'
    },
  },
})
</script>
