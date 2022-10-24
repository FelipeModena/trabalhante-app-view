<template>
  <b-container>
    <b-row align-h="center" align-v="center" class="mt-5">
      <b-col lg="6" md="">
        <b-card align="center">
          <b-img class="mx-auto" src="/logo.png" width="100px" />

          <b-row class="text-left">
            <b-col>
              <b-form>
                <b-form-group label="Email" label-for="login-email">
                  <b-form-input
                    id="login-email"
                    v-model="email"
                    placeholder="email@mail.com"
                    :formatter="formatter"
                    autofocus
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="Senha" label-for="login-password">
                  <b-form-input
                    id="login-password"
                    v-model="password"
                    type="password"
                    :formatter="formatter"
                  ></b-form-input>
                </b-form-group>
              </b-form>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-button class="w-100" variant="primary">Entrar</b-button>
              <p class="text-right text-secondary mt-1">Esqueci minha senha</p>
            </b-col>
          </b-row>
          <b-row class="mt-3">
            <b-col>
              <p>ou</p>
              <p>
                Precisa de uma conta?
                <nuxt-link to="login/register"> Cadastre-se!</nuxt-link>
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
    formatter(value: string) {
      return value.toLowerCase()
    },
  },
})
</script>
