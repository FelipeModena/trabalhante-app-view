<template>
  <b-container>
    <b-row>
      <b-col>
        {{ cities }}
        <h2>Muito bem! estamos quase acabando!</h2>
        <p>
          Agora nos falta apenas pegarmos algumas informações para facilitar a
          sua busca
        </p>
        <b-card>
          <b-form>
            <b-form-group label="Seu nome" label-for="register-">
              <b-form-input
                id="register-"
                v-model="name"
                type="text"
                :formatter="formatter"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="O que você procura?"
              label-for="register-jobModel"
            >
              <b-form-select
                id="register-jobModel"
                v-model="jobModel"
                :options="options"
              ></b-form-select>
            </b-form-group>
          </b-form>

          <NewCompanyUser v-if="jobModel === 1" />
          <NewNormalUser v-if="jobModel === 2" />
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import cities from '~/static/data/geo/brazil.json'
import NewCompanyUser from '~/components/register/NewCompanyUser.vue'
import NewNormalUser from '~/components/register/NewNormalUser.vue'
export default Vue.extend({
  name: 'RegisterFormsPage',
  components: { NewCompanyUser, NewNormalUser },
  asyncData({ params }) {
    return { cities }
  },
  data() {
    return {
      jobModel: 0,
      options: [
        { value: 1, text: 'Contratar' },
        { value: 2, text: 'Ser contratado' },
      ],
      name: '',
      password: '',
    }
  },
  mounted() {
    console.log(cities)
  },
  methods: {
    formatter(value: string) {
      return value.toLowerCase()
    },
  },
})
</script>
