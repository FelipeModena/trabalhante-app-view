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
                    ><p>Meu perfil</p>
                  </b-nav-item>
                  <p>Outras contas</p>
                  <b-nav-item
                    v-for="user in userAccounts"
                    :key="user.id"
                    :disabled="userId === user.id"
                    @click="hide"
                  >
                    <div @click="changeUser(user.id)">
                      <b-avatar></b-avatar>
                      <p>{{ user.userName }}</p>
                    </div>
                  </b-nav-item>
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
        <b-button variant="primary" @click="hide">Fechar</b-button>
      </div>
    </template>
  </b-sidebar>
</template>
<script lang="ts">
import { getModule } from 'nuxt-property-decorator'
import Vue, { PropType } from 'vue'
import { store } from '~/store/main'
import { UserState } from '~/store/types/user'
import UserModule from '~/store/user'

export default Vue.extend({
  name: 'SidebarLayoutComponent',
  props: {
    userAccounts: {
      type: Array as PropType<Array<UserState>>,
      default: () => [],
      required: true,
    },
    userName: {
      type: String,
      default: '',
      required: true,
    },
    userId: {
      type: String,
      default: '',
      required: true,
    },
  },
  computed: {
    userModuleConnection: () => getModule(UserModule, store),
  },
  methods: {
    changeUser(userId: any) {
      this.userModuleConnection.changeUserByIdAction(userId)

      this.$nuxt.$emit('changeUserNavBar', userId)
    },
  },
})
</script>
