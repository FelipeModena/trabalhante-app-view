<template>
  <b-container>
    <b-row>
      <b-col>
        <h2>Muito bem! estamos quase acabando!</h2>
        <p>
          Agora nos falta apenas pegarmos algumas informações para facilitar a
          sua busca
        </p>
        <b-card class="mb-5">
          <b-form>
            <b-form-group label="Seu nome" label-for="register-">
              <b-form-input
                id="register-"
                v-model="name"
                type="text"
                :formatter="formatter"
              ></b-form-input>
            </b-form-group>
          </b-form>

          <NewCompanyUser
            v-if="jobModel === '1'"
            :cities="cities"
            :user-id="userId"
            :user-name="name"
          />
          <NewNormalUser
            v-if="jobModel === '2'"
            :cities="cities"
            :user-id="userId"
            :user-name="name"
          />
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import NewCompanyUser from '~/components/register/NewCompanyUser.vue'
import NewNormalUser from '~/components/register/NewNormalUser.vue'
import citiesJson from '~/static/data/geo/brazil-cities-states.json'
export default Vue.extend({
  name: 'RegisterFormsPage',
  components: { NewCompanyUser, NewNormalUser },
  data() {
    return {
      cities: citiesJson.states,
      userId: '',

      name: 'Felipe',
    }
  },
  computed: {
    jobModel(): string {
      const jobModel = this.$router.currentRoute.query.jobModel.toString()
      return jobModel
    },
  },
  created() {
    const id = this.$router.currentRoute.query.id
    if (!id) {
      this.$router.push({
        path: '/login/register',
      })
    } else this.userId = id.toString()
  },
  methods: {
    formatter(value: string) {
      return value.toLowerCase()
    },
  },
})
</script>
