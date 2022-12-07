<template>
  <b-container>
    <b-row align-h="center" align-v="center" class="mt-5">
      <b-col lg="6" md="">
        <b-card align="center">
          <b-img class="mx-auto" src="/logo.png" width="100px" />

          <b-row class="text-left">
            <b-col>
              <b-form @submit="onSubmit">
                <b-form-group label="Email" label-for="login-email">
                  <b-form-input
                    id="login-email"
                    v-model="email"
                    required
                    type="email"
                    placeholder="email@mail.com"
                    :formatter="formatter"
                    autofocus
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="Senha" label-for="login-password">
                  <b-form-input
                    id="login-password"
                    v-model="password"
                    required
                    type="password"
                    :formatter="formatter"
                  ></b-form-input>
                </b-form-group>
                <b-button type="submit" class="w-100" variant="primary"
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
                <nuxt-link class="text-secondary" to="login/register">
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
import Vue from 'vue'
export default Vue.extend({
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    onSubmit(event: Event) {
      event.preventDefault()
      alert(JSON.stringify({}))
    },
    formatter(value: string) {
      return value.toLowerCase()
    },
  },
})
</script>
