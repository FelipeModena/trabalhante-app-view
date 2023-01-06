<template>
  <b-container class="mt-5">
    <b-row class="pt-5">
      <b-col lg="7" class="px-5 text-center">
        <b-img class="mx-auto my-3" src="/img/common/logo-text.png" fluid />
        <h2>
          Uma nova forma de encontrar pessoas e ambientes de trabalho
          compatíveis ao seu modelo!
        </h2>
      </b-col>
      <b-col class="my-auto">
        <b-card align="center">
          <b-row class="text-left">
            <b-col>
              <b-form @submit="onSubmit">
                <b-form-group label="Email" label-for="login-email">
                  <b-form-input
                    id="login-email"
                    v-model="formsRegister.email"
                    placeholder="email@mail.com"
                    :formatter="formatter"
                    autofocus
                    required
                    :disabled="formsRegister.demo"
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="Senha" label-for="login-password">
                  <b-form-input
                    id="login-password"
                    v-model="formsRegister.password"
                    type="password"
                    required
                    :formatter="formatter"
                    :disabled="formsRegister.demo"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  label="O que você procura?"
                  label-for="register-jobModel"
                >
                  <b-form-select
                    id="register-jobModel"
                    v-model="formsRegister.jobModel"
                    :options="options"
                  ></b-form-select>
                </b-form-group>

                <b-form-checkbox
                  id="input-5"
                  v-model="formsRegister.demo"
                  switch
                  :true-value="true"
                  :false-value="false"
                >
                  Versão demonstrativa
                </b-form-checkbox>
                <b-button class="w-100" variant="primary" type="submit"
                  >Criar nova conta</b-button
                >
              </b-form>
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
import { getModule } from 'nuxt-property-decorator'
import Vue from 'vue'
import CompanyModule from '~/store/company'
import { store } from '~/store/main'
import UserModule from '~/store/user'
export default Vue.extend({
  name: 'RegisterPage',
  layout:'numb',
  data() {
    return {
      formsRegister: {
        email: '',
        password: '',
        jobModel: 1,
        demo: false,
      },
      options: [
        { value: 1, text: 'Contratar' },
        { value: 2, text: 'Ser contratado' },
      ],
    }
  },
  computed: {
    userModuleConnection: () => getModule(UserModule, store),
    companyModuleConnection: () => getModule(CompanyModule, store),
  },
  methods: {
    onSubmit(event: Event) {
      event.preventDefault()

      this.registerRoute()
    },
    registerRoute() {
      if (this.formsRegister.demo === true) {
        this.userModuleConnection.setMockUserAction(this.formsRegister.jobModel)
        if (this.formsRegister.jobModel === 1) {
          this.companyModuleConnection.setMockCompaniesAction()
        }
        this.$router.push('/dashboard')
      } else {
        const randomId = Math.floor(Math.random() * 1000).toString()
        this.$router.push({
          path: '/login/register/register-forms',
          query: {
            id: randomId,
            jobModel: this.formsRegister.jobModel.toString(),
          },
        })
      }
    },
    formatter(value: string) {
      return value.toLowerCase()
    },
  },
})
</script>
