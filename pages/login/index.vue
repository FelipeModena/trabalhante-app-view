<template>
  <b-container>
    <b-row align-h="center" align-v="center" class="mt-5">
      <b-col lg="6" md="">
        <b-card align="center">
          <b-img class="mx-auto" src="/img/common/logo.png" width="100px" />

          <b-row class="text-left">
            <b-col>
              <b-form @submit="onSubmit">
                <b-form-group label="Email" label-for="login-email">
                  <b-form-input
                    id="login-email"
                    v-model="formsLogin.email"
                    required
                    placeholder="email@mail.com"
                    :formatter="formatter"
                    autofocus
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="Senha" label-for="login-password">
                  <b-form-input
                    id="login-password"
                    v-model="formsLogin.password"
                    required
                    type="password"
                    :formatter="formatter"
                  ></b-form-input>
                </b-form-group>
                <b-button
                  type="submit"
                  class="w-100"
                  variant="primary"
                  :disabled="loading"
                  >Entrar</b-button
                >
              </b-form>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="text-right mt-2">
              <nuxt-link class="text-secondary" to="/">
                Esqueci minha senha
              </nuxt-link>
            </b-col>
          </b-row>
          <b-row class="mt-3">
            <b-col>
              <p>ou</p>
              <p>
                Precisa de uma conta?
                <nuxt-link class="text-secondary" to="/login/register">
                  Cadastre-se!</nuxt-link
                >
              </p>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { getModule } from 'nuxt-property-decorator'
import Vue from 'vue'
import CompanyModule from '~/store/company'
import { store } from '~/store/main'
import UserModule from '~/store/user'
export default Vue.extend({
  name: 'LoginPage',
  layout: 'numb',
  data() {
    return {
      formsLogin: {
        email: '',
        password: '',
      },
      loading: false,
      toastCount: 0,
    }
  },
  computed: {
    userModuleConnection: () => getModule(UserModule, store),
    companyModuleConnection: () => getModule(CompanyModule, store),
  },
  methods: {
    onSubmit(event: Event) {
      event.preventDefault()
      this.loading = true
      // add loading effect
      this.userModuleConnection.usersMock.find((user) => {
        if (
          user.email === this.formsLogin.email &&
          user.password === this.formsLogin.password
        ) {
          this.userModuleConnection.setMockUserAction(1)
          this.$router.push('/dashboard')
          return true
        }

        return false
      })
      setTimeout(() => {
        this.loading = false
        this.makeToast()
      }, 2000)
      // validate form and login, then redirect to dashboard home
    },

    makeToast(append = false) {
      this.toastCount++
      this.$bvToast.toast('Usuario ou senha incorretos, verrifique se os campos estão preenchidos corretamente', {
        title: 'Falha no login',
        autoHideDelay: 5000,
        variant: 'danger',
        appendToast: append,
      })
    },
    formatter(value: string) {
      return value.toLowerCase()
    },
  },
})
</script>
