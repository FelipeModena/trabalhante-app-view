<template>
  <div>
    <b-form>
      <b-form-group
        label="Nome da sua empresa"
        label-for="register-company-name"
      >
        <b-form-input
          id="register-company-name"
          v-model="companyName"
          type="text"
          :formatter="formatter"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Estado" label-for="register-uf">
        <b-form-select
          id="register-uf"
          v-model="companyUf"
          :options="ufsFromCities"
        ></b-form-select>
      </b-form-group>
      <b-form-group label="Cidade" label-for="register-uf">
        <b-form-select
          id="register-uf"
          v-model="companyCity"
          :options="citiesFromUF"
        ></b-form-select>
      </b-form-group>
      <b-form-group
        label="Setores de atuação"
        label-for="register-uf"
        description="Exemplo: shopping, atendimento ao cliente, indústria de tecidos, etc"
      >
        <b-form-tags v-model="companyRoles" input-id="tags-basic"></b-form-tags>
      </b-form-group>

      <b-button variant="primary" @click="submitNewCompanyUser">{{
        configText.formsButton
      }}</b-button>
    </b-form>
  </div>
</template>

<script lang="ts">
import { getModule } from 'nuxt-property-decorator'
import Vue from 'vue'
import { PropType } from 'vue/types/v3-component-props'
import CompanyModule from '~/store/company'
import { store } from '~/store/main'
import { City } from '~/store/types/common/City'
import UserModule from '~/store/user'
declare module 'vue/types/vue' {
  interface Vue {
    companyName: string
    companyCnpj: string
    companyUf: string
    companyCity: string
    companyRoles: []
    companyDescription: string
    companyEmail: string
    configText: {
      formsButton: 'Criar nova conta com empresa'
    }
    formatter: () => string
    submitNewCompanyUser: () => void
  }
}
export default Vue.extend({
  name: 'NewCompanyUser',
  props: {
    cities: {
      type: Array as PropType<Array<City>>,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      companyName: 'Modena Empresa',
      companyCnpj: '',
      companyUf: 'SP',
      companyCity: 'Adamantina',
      companyRoles: [
        'shopping',
        'atendimento ao cliente',
        'indústria de tecidos',
      ],
      companyDescription: '',
      companyEmail: '',
      configText: {
        formsButton: 'Criar nova conta com empresa',
      },
    }
  },
  computed: {
    companyModuleConnection: () => getModule(CompanyModule, store),
    userModuleConnection: () => getModule(UserModule, store),
    ufsFromCities() {
      return this.cities.map((city: City) => ({
        value: city.uf,
        text: city.name,
      }))
    },
    citiesFromUF() {
      const cities: any =
        this.cities.find((city: City) => city.uf === this.companyUf) ?? []

      return cities ? cities.cities : []
    },
  },
  methods: {
    submitNewCompanyUser(): void {
      this.userModuleConnection.createNewUserAction({
        userName: this.userName,
        id: this.userId,
      })

      const companyStoreStatus: any =
        this.companyModuleConnection.addNewCompanyAction({
          userId: this.userId,
          companyName: this.companyName,
          description: this.companyDescription,
          socialName: this.companyName,
          companyInfo: {
            city: this.companyCity,
            uf: this.companyUf,
          },
          roles: this.companyRoles,
          companyStatus: {},
        })
      if (companyStoreStatus !== 1) {
        this.$router.push({ path: '/dashboard', query: { id: this.userId } })
      }
    },
    formatter(value: string): string {
      return value.toLowerCase()
    },
  },
})
</script>
