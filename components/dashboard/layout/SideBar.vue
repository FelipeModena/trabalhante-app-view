<template>
  <b-sidebar
    id="sidebar-no-header"
    aria-labelledby="sidebar-no-header-title"
    no-header
    shadow
    right
    backdrop
  >
    <template #default="{ hide }">
      <b-container>
        <b-row align-h="center" class="my-4">
          <b-col cols="7">
            <b-avatar size="150px" />
            <div class="text-center">
              <nav class="mb-3">
                <b-nav vertical>
                  <b-nav-item href="#link-1" @click="hide"
                    >Meu perfil</b-nav-item
                  >
                </b-nav>
              </nav>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </template>
    <template #footer="{ hide }">
      <div class="d-flex bg-secondary text-light align-items-center px-3 py-2">
        <b-btn variant="danger" class="mr-auto" append
          >Sair <b-icon-door-open />
        </b-btn>
        <b-button  variant="primary" @click="hide">Fechar</b-button>
      </div>
    </template>
  </b-sidebar>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'SidebarLayoutComponent',
  props: {
    userName: {
      type: String,
      default: '',
      required: true,
    },
  },
})
</script>
