<template>
  <b-container class="mt-5">
    <b-row class="pt-5">
      <b-col lg="8" class="px-5 text-center">
        <b-img class="mx-auto my-3" src="/logo-text.png" fluid />
        <h2>
          Uma nova forma de encontrar pessoas e ambientes de trabalho
          compatíveis ao seu modelo!
        </h2>
      </b-col>
      <b-col>
        <b-card align="center">
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
              <b-button class="w-100" variant="primary" @click="registerRoute()"
                >Criar nova conta</b-button
              >
            </b-col>
          </b-row>
          <b-row class="mt-3">
            <b-col>
              <p>ou</p>
              <p>
                Já possui conta?
                <nuxt-link to="/login"> Entrar aqui</nuxt-link>
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
  name: 'RegisterPage',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    registerRoute() {
      const randomId = Math.floor(Math.random() * 1000).toString()
      this.$router.push({
        path: '/login/register/register-forms',
        query: { id: randomId },
      })
    },
    formatter(value: string) {
      return value.toLowerCase()
    },
  },
})
</script>
